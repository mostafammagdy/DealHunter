package ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.model.Review;
import ecommerce.repository.ItemRepository;
import ecommerce.repository.ReviewRepository;


@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@Autowired
	private ReviewRepository reviews;
	
	@Autowired
	private ItemRepository items;
	
	
	@GetMapping
	public List<Review> getAllReviews(){
		return reviews.findAll();
	}
	
	
	/**
	 * Get a list of reviews for specified Item
	 * @param id: Id of item
	 * @return
	 */
	@GetMapping(value="/item/{id}")
	public List<Review> getReviewByItem(@PathVariable long id){
		return reviews.findByItem_Id(id);
	}

	
	
	/**
	 * Create a review for an Item.
	 * @param id	Id of item
	 * @param review	e.g. {"text":"great,worth $1000","rating":5}
	 * @return
	 */
	@PostMapping(value="/item/{id}")
	public Review createReview(@PathVariable long id, @RequestBody Review review) {
		review.setItem(items.findById(id).orElse(null));
		return reviews.save(review);
	}
	
	
	/**
	 * update a reviews text and/or rating
	 * @param id: the id of the review
	 * @param review
	 * @return
	 */
	@PutMapping(value="/{id}")
	public Review changeReview(@PathVariable long id ,@RequestBody Review review) {
		Review old = reviews.findById(id).orElse(null);
		if (old != null) {
			old.setRating(review.getRating());
			old.setText(review.getText());
		}
	
		return reviews.save(old);
	}
	
	/**
	 * delete an Review
	 * @param id
	 */
	@DeleteMapping(value="/{id}")
	public void deleteReview(@PathVariable long id) {
		if (reviews.existsById(id))
			reviews.deleteById(id);
	}

}
