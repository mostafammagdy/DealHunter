package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
	
	
}
