package ecommerce.controller;

import ecommerce.exception.ResourceNotFoundException;
import ecommerce.model.User;
import ecommerce.payload.BillingRequest;
import ecommerce.payload.ShippingRequest;
import ecommerce.repository.UserRepository;
import ecommerce.security.CurrentUser;
import ecommerce.security.UserPrincipal;

import org.springframework.web.bind.annotation.RequestBody;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	/**
	 * This provides API for the front end to use for user interactions. 
	 */

    @Autowired
    private UserRepository userRepository;
    
 
    /** 
     * Allows to see all current information who is logged in
     */
    
    @GetMapping("/user/me")
//    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
    
    /**
     * Allows to update the billing information of the user. 
     */
    @PostMapping("/user/billingUpdate")
    public String setCurrentUserBillingInfo(@CurrentUser @Valid @RequestBody BillingRequest billingRequest) {
    	User currentUser= userRepository.findById(billingRequest.getId()); 
    	System.out.println(billingRequest.getBillingAddress());
    	currentUser.setBillingAddress(billingRequest.getBillingAddress());
    	currentUser.setBillingCity(billingRequest.getBillingCity());
    	currentUser.setBillingPostalCode(billingRequest.getBillingPostalCode());
    	currentUser.setBillingProvince(billingRequest.getBillingProvince());
    	currentUser.setBillingCountry(billingRequest.getBillingCountry());
    	userRepository.save(currentUser);
    	return "All billing changes have been updated and saved.";            
    }
    
    /**
     * Allows to update shipping details of the user. 
     */
    @PostMapping("/user/shippingUpdate")
    public String setCurrentUserShippingInfo(@CurrentUser @Valid @RequestBody ShippingRequest shippingRequest) {
    	User currentUser= userRepository.findById(shippingRequest.getId()); 
    	currentUser.setShippingAddress(shippingRequest.getShippingAddress());
    	currentUser.setShippingCity(shippingRequest.getShippingCity());
    	currentUser.setShippingPostalCode(shippingRequest.getShippingPostalCode());
    	currentUser.setShippingProvince(shippingRequest.getShippingProvince());
    	currentUser.setShippingCountry(shippingRequest.getShippingCountry());
    	userRepository.save(currentUser);
    	return "All shipping changes have been updated and saved.";            
    }
    
}
