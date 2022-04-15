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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.model.Item;
import ecommerce.model.Cart;
import ecommerce.model.CartItem;
import ecommerce.repository.ItemRepository;
import ecommerce.repository.CartItemRepository;

import ecommerce.repository.CartRepository;

@RestController
@RequestMapping("/carts")
public class CartController {
	
	@Autowired
	private CartRepository carts;
	
	@Autowired
	private ItemRepository items;
	@Autowired
	private CartItemRepository cart_items;
	
	
	/**
	 * Get a list of all orders
	 * @return
	 */
	@GetMapping
	public List<Cart> getAllCarts(){
		return carts.findAll();
	}
	
	/**
	 * get a list of orders by a user specified by id
	 * @param id
	 * @return
	 */
	@GetMapping(value="/user/{id}")
	public List<Cart> getCartByUser(@PathVariable int id){
		return carts.findByUser_Id(id);
	}

	/**
	 * Create a new order
	 * @param order
	 * @return
	 */
	@PostMapping
	public Cart createCart(@RequestBody Cart cart) {
		return carts.save(cart);
	}
	
	/**
	 * Adds the item specified by item_id to the order specified by id.<br>
	 * Quantity is passed with a RequestParam, Defaulted to 1. 
	 * Updates order.totalPrice with the new item(s)
	 * @param id
	 * @param item_id
	 * @param quantity
	 */
	@PostMapping(value="/{id}/{item_id}")
	public void addItemToCart(
			@PathVariable long id, 
			@PathVariable long item_id,
			@RequestParam(defaultValue="1") int quantity) {
		if (carts.existsById(id) && items.existsById(item_id) && quantity > 0){
			//get the order and item to be added
			Cart cart = carts.getOne(id);
			Item item = items.getOne(item_id);
			
			// max order quantity is the item's quantity
			quantity = Math.min(quantity, item.getQuantity());
			
			// create a orderItem connected to the order
			CartItem cart_item = new CartItem(quantity, item, cart);
			cart_items.save(cart_item);
			
			// update order total price
			cart.setTotal_price(cart.getTotal_price() + item.getPrice() * quantity);
			carts.save(cart);
		}
	}
	/**
	 * Sets the order to "finished" and updates item stock to reflect checked out items.
	 * @param id
	 * @return
	 */
	@PostMapping(value="/checkout/{id}")
	
	
	/**
	 * Updates an Order
	 * @param order
	 * @param id
	 * @return
	 */
	@PutMapping(value="/{id}")
	public Cart updateCart(@RequestBody Cart cart, @PathVariable long id) {
		cart.setId(id);
		return carts.save(cart);
	}

	/**
	 * delete an Order
	 * @param id
	 */
	@DeleteMapping(value="/{id}")
	public void deleteCart(@PathVariable long id) {
		if (carts.existsById(id))
			carts.deleteById(id);
	}
}
