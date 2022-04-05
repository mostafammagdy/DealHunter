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

import ecommerce.model.Order;
import ecommerce.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired	
	private OrderService orders;

	@GetMapping
	public List<Order> getAllOrders(){
		return orders.getAll();
	}
	

	@GetMapping(value="/user/{id}")
	public List<Order> getOrdersByUser(@PathVariable int id){
		return orders.getByUser(id);
	}


	@PostMapping
	public Order createOrder(@RequestBody Order order) {
		return orders.create(order);
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
	public void addItemToOrder(
			@PathVariable long id, 
			@PathVariable long item_id,
			@RequestParam(defaultValue="1") int quantity) {
		addItemToOrder(id,item_id,quantity);
	}
	
	/**
	 * Sets the order to "finished" and updates item stock to reflect checked out items.
	 * @param id
	 * @return
	 */
	@PostMapping(value="/checkout/{id}")
	public String checkoutOrder(@PathVariable long id) {
		return orders.checkout(id);
	}
	
	/**
	 * Updates an Order
	 * @param order
	 * @param id
	 * @return
	 */
	@PutMapping(value="/{id}")
	public Order updateOrder(@RequestBody Order order, @PathVariable long id) {
		return orders.update(order, id);
	}

	/**
	 * delete an Order
	 * @param id
	 */
	@DeleteMapping(value="/{id}")
	public void deleteOrder(@PathVariable long id) {
		orders.delete(id);
	}
}
