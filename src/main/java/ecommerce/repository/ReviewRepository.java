package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	public List<Review> findByItem_Id(Long itemId);
}
