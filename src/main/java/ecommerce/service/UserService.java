package ecommerce.service;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import ecommerce.model.User;



public interface UserService {
	 Optional<User> findByEmail(String email);

	 Boolean existsByEmail(String email);

}
