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

import ecommerce.model.Order;
import ecommerce.service.OrderService;
import ecommerce.util.OrderHelper;

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
	 * The intended way to create orders. Example request body: <br>
	 * [ { "item":1, "quantity":2 } ]<br>
	 * represents a new order containing 2 items with id 1
	 * 
	 * @param username
	 * @param orderItems
	 * @return
	 */
	@PostMapping(value="/process/{user}")
	public String createOrder(@PathVariable String username, @RequestBody List<OrderHelper> orderItems) {
		return orders.createAndCheckout(username, orderItems);
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
