package ecommerce;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

import ecommerce.config.AppProperties;

//@SpringBootApplication (exclude = { SecurityAutoConfiguration.class })
@EnableConfigurationProperties(AppProperties.class)
@EnableAutoConfiguration
@SpringBootApplication
public class ECommerceAPI {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(ECommerceAPI.class, args);	
	}
	
}