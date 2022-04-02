package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	public List<Order> findByUser_Id(Integer id);
	
}
