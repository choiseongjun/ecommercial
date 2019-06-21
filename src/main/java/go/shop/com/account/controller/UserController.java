package go.shop.com.account.controller;

 

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import go.shop.com.account.domain.User;
import go.shop.com.account.exception.ResourceNotFoundException;
import go.shop.com.account.repository.UserRepository;
import go.shop.com.account.security.CurrentUser;
import go.shop.com.account.security.UserPrincipal;

 
/**
* @author 최성준.
* @version 2019.06.04 v1.0
* @Story 사용자 회원가입 로그인
*/
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/user/me")
	@PreAuthorize("hasRole('USER')")
	public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
		return userRepository.findById(userPrincipal.getId())
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
	}
	@PostMapping("/updateUser/{user.id}")
	public ResponseEntity<User> updateUser(@PathVariable("user.id") Long id, @RequestBody User user) {
		
		Optional<User> userData = userRepository.findById(id);
		if (userData.isPresent()) {
			User saveUser = userData.get();
			saveUser.setName(user.getName());
			User updatedBook = userRepository.save(saveUser);
			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/deleteUser/{user.id}")
	  public ResponseEntity<String> deleteUser(@PathVariable("user.id") Long id) {
	    System.out.println("Delete Book with ID = " + id + "...");
	    try {
	    	userRepository.deleteById(id);
	    } catch (Exception e) {
	      return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
	    }
	    return new ResponseEntity<>("Book has been deleted!", HttpStatus.OK);
	  }
}