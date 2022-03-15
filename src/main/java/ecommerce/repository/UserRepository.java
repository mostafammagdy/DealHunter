package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}