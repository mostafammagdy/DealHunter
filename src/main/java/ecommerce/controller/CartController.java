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

import ecommerce.model.Cart;
import ecommerce.service.CartService;
import ecommerce.util.CartHelper;

@RestController
@RequestMapping("/carts")
public class CartController {
	
	@Autowired	
	private CartService carts;

	@GetMapping
	public List<Cart> getAllCarts(){
		return carts.getAll();
	}
	

	@GetMapping(value="/user/{id}")
	public List<Cart> getCartByUser(@PathVariable int id){
		return carts.getByUser(id);
	}


	@PostMapping
	public Cart createCart(@RequestBody Cart cart) {
		return carts.create(cart);
	}
	
	/**
	 * The intended way to create orders. Example request body: <br>
	 * [ { "item":1, "quantity":2 } ]<br>
	 * represents a new order containing 2 items with id 1
	 * 
	 * @param username
	 * @param orderItems
	 * @return
	 */
	@PostMapping(value="/cart/{user}")
	public Cart createCart(@PathVariable String username, @RequestBody List<CartHelper> cartItems) {
		return carts.createAndPull(username, cartItems);
	}
	
	
	/**
	 * Updates an Order
	 * @param order
	 * @param id
	 * @return
	 */
	@PutMapping(value="/cart/{id}")
	public Cart updateCart(@RequestBody Cart cart, @PathVariable long id) {
		return carts.update(cart, id);
	}

	/**
	 * delete an Order
	 * @param id
	 */
	@DeleteMapping(value="/{id}")
	public void deleteOrder(@PathVariable long id) {
		carts.delete(id);
	}
}
