package ecommerce.repository;

import ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    
    User findById(long i);

    Boolean existsByEmail(String email);
    
    @Query(value = "select * from users where email = :email", nativeQuery = true)
    User getUserDetails(String email);

}