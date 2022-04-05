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
import ecommerce.controller.UserController; 
import ecommerce.model.User;
import ecommerce.payload.AddressRequest;
import ecommerce.repository.UserRepository;
import ecommerce.model.Status;
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
    public String getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
       
       String a = userPrincipal.getEmail();
       System.out.println("-----------------");
       System.out.println(userPrincipal.getEmail());
       return a;
    }
    
   
}