package ecommerce.controller;

import org.apache.catalina.connector.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


import java.util.List;
import java.util.Optional;

import ecommerce.controller.UserController; 
import ecommerce.model.User;
import ecommerce.payload.AddressRequest;
import ecommerce.payload.BillingRequest;
import ecommerce.repository.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ecommerce.exception.ResourceNotFoundException;
import ecommerce.security.CurrentUser;
import ecommerce.security.CustomUserDetailsService;
import ecommerce.security.UserPrincipal;


@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @CrossOrigin
    
    
    @GetMapping("/user/me")
 //   @PreAuthorize("hasRole('USER')")
    public String getCurrentUser(@CurrentUser @Valid @RequestBody UserPrincipal userPrincipal) {
        userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
      //  System.out.println(authentication.getName());
       String a = userPrincipal.getEmail();
        System.out.println("-----------------");
        System.out.println(userPrincipal.getEmail());
        return a;
    }
    
    @PostMapping("/user/me/updateAddress")
    //@PreAuthorize("hasRole('USER')")
    public double updateAddress(@CurrentUser @Valid @RequestBody AddressRequest updateAddressRequest, UserPrincipal userPrincipal) {
    	userRepository.findById(userPrincipal.getId());
    	User current = null; // this current should point to the statement, but I CANT DO IT -.- 
    	current.setAddress(updateAddressRequest.getCity());
    	current.setPostalCode(updateAddressRequest.getCity());
    	current.setCountry(updateAddressRequest.getCity());
    	current.setCity(updateAddressRequest.getCity());
    	return current.getId();
    }
    
    @PostMapping("/user/me/billingAddress")
    //@PreAuthorize("hasRole('USER')")
    public double updateAddress(@CurrentUser @Valid @RequestBody BillingRequest updateAddressRequest, UserPrincipal userPrincipal) {
    	userRepository.findById(userPrincipal.getId());
    	User current = null; // this current should point to the statement, but I CANT DO IT -.- 
    	current.setAddress(updateAddressRequest.getBillingCity());
    	current.setPostalCode(updateAddressRequest.getBillingCity());
    	current.setCountry(updateAddressRequest.getBillingCity());
    	current.setCity(updateAddressRequest.getBillingCity());
    	return current.getId();
    }
    
    
    
    
  
}