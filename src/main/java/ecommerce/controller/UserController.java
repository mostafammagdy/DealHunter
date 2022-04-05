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
        userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
      //  System.out.println(authentication.getName());
       String a = userPrincipal.getName();
        System.out.println("-----------------");
        System.out.println(userPrincipal.getName());
        return a;
    }
    
    
    
    
    
    
    @PostMapping("/users/register")
    public Status registerUser(@Valid @RequestBody User newUser) {
        List<User> users = userRepository.findAll();
        System.out.println("New user: " + newUser.toString());
        for (User user : users) {
            System.out.println("Registered user: " + newUser.toString());
            if (user.equals(newUser)) {
                System.out.println("User Already exists!");
                return Status.USER_ALREADY_EXISTS;
            }
        }
        userRepository.save(newUser);
        return Status.SUCCESS;
    }
    
    

    
    
    @PostMapping("/users/login")
    public Status loginUser(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                return Status.SUCCESS ;
            }
        }
        return Status.FAILURE;
    }
    
    @PostMapping("/users/logout")
    public Status logUserOut(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                
                userRepository.save(user);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }
    @DeleteMapping("/users/all")
    public Status deleteUsers() {
        userRepository.deleteAll();
        return Status.SUCCESS;
    }
}