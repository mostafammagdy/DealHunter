package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
	
	public List<Cart> findByUser_Id(Integer id);
	
}
