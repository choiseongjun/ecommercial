package go.Shop.com.User.controller;

import java.net.URI;
import java.util.Collections;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import go.Shop.com.User.config.BuildDescription;
import go.Shop.com.User.exception.AppException;
import go.Shop.com.User.exception.BadRequestException;
import go.Shop.com.User.model.ActionCode;
import go.Shop.com.User.model.AuthProvider;
import go.Shop.com.User.model.Description;
import go.Shop.com.User.model.Role;
import go.Shop.com.User.model.User;
import go.Shop.com.User.model.UserHistory;
import go.Shop.com.User.model.UserRole;
import go.Shop.com.User.payload.ApiResponse;
import go.Shop.com.User.payload.AuthResponse;
import go.Shop.com.User.payload.LoginRequest;
import go.Shop.com.User.payload.SignUpRequest;
import go.Shop.com.User.repository.RoleRepository;
import go.Shop.com.User.repository.UserRepository;
import go.Shop.com.User.security.TokenProvider;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;
    
    @Autowired
    RoleRepository roleRepository;


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        /*ip주소 가져오는 객체정보 정확하진 않음*/
        HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
        /*시큐리티 세션정보...최성준 2019-04-09*/
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        BuildDescription builddesc;
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = new User();
        /*회원히스토리 기록*/
        UserHistory uh=new UserHistory();
        uh.setIp(req.getRemoteAddr());
        uh.setEmail(authentication.getName());
        uh.setUrl(req.getRequestURI());
        uh.setDescription(BuildDescription.get(Description.LOGIN,authentication.getName()));
        uh.setActionCode(ActionCode.LOGIN);
        userRepository.save(uh);
        
        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }
//        Role userRole = roleRepository.findByName(UserRole.User)
//                .orElseThrow(() -> new AppException("User Role not set."));
        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);
        
        //security Role 구분
        Role userRole = roleRepository.findByName(UserRole.User)
                .orElseThrow(() -> new AppException("User Role not set."));
        
        user.setRoles(Collections.singleton(userRole));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(user.getCreatedAt());
        
        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "User registered successfully@"));
    }

}
