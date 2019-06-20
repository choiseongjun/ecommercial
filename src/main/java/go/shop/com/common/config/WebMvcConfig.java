package go.shop.com.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;


/**
* Cors설정(Front단과 통신)
* 인터셉터 설정
* @author 최성준
* @version 2019.04.10 v1.0
*/
@Configuration
@EnableTransactionManagement
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Bean
    public LocaleChangeInterceptor localChangeInterceptor() {
    	LocaleChangeInterceptor localeChangeInterceptor=new LocaleChangeInterceptor();
    	localeChangeInterceptor.setParamName("lang");
    	return localeChangeInterceptor;
    }
  
 
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
    	registry.addInterceptor(localChangeInterceptor());
    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .allowedHeaders("*")
        .allowCredentials(true)
        .maxAge(MAX_AGE_SECS);
    }
}
