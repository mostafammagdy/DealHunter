package ecommerce.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmail(String email);
}