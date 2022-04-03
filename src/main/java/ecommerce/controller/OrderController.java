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
import ecommerce.model.Order;
import ecommerce.model.OrderItem;
import ecommerce.repository.ItemRepository;
import ecommerce.repository.OrderItemRepository;
import ecommerce.repository.OrderRepository;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	private OrderRepository orders;
	
	@Autowired
	private ItemRepository items;
	@Autowired
	private OrderItemRepository order_items;
	
	
	/**
	 * Get a list of all orders
	 * @return
	 */
	@GetMapping
	public List<Order> getAllOrders(){
		return orders.findAll();
	}
	
	/**
	 * get a list of orders by a user specified by id
	 * @param id
	 * @return
	 */
	@GetMapping(value="/user/{id}")
	public List<Order> getOrdersByUser(@PathVariable int id){
		return orders.findByUser_Id(id);
	}

	/**
	 * Create a new order
	 * @param order
	 * @return
	 */
	@PostMapping
	public Order createOrder(@RequestBody Order order) {
		return orders.save(order);
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
		if (orders.existsById(id) && items.existsById(item_id) && quantity > 0){
			//get the order and item to be added
			Order order = orders.getOne(id);
			Item item = items.getOne(item_id);
			
			// max order quantity is the item's quantity
			quantity = Math.min(quantity, item.getQuantity());
			
			// create a orderItem connected to the order
			OrderItem order_item = new OrderItem(quantity, item, order);
			order_items.save(order_item);
			
			// update order total price
			order.setTotal_price(order.getTotal_price() + item.getPrice() * quantity);
			orders.save(order);
		}
	}
	/**
	 * Sets the order to "finished" and updates item stock to reflect checked out items.
	 * @param id
	 * @return
	 */
	@PostMapping(value="/checkout/{id}")
	public String checkoutOrder(@PathVariable long id) {
		if(orders.existsById(id)) {
			Order order = orders.getOne(id);
			if (order.getStatus().equals("finished")) {
				return "Order already finished.";
			}
			// subtract item stock quantities
			for (OrderItem orderItem: order.getOrderItems()) {
				Item item = orderItem.getItem();
				item.setQuantity(item.getQuantity() - orderItem.getQuantity());
				items.save(item);
			}
			order.setStatus("finished");
			orders.save(order);
			return "Successful Checkout.";
		}
		return "No unfinished order with that id.";
	}
	
	/**
	 * Updates an Order
	 * @param order
	 * @param id
	 * @return
	 */
	@PutMapping(value="/{id}")
	public Order updateOrder(@RequestBody Order order, @PathVariable long id) {
		order.setId(id);
		return orders.save(order);
	}

	/**
	 * delete an Order
	 * @param id
	 */
	@DeleteMapping(value="/{id}")
	public void deleteOrder(@PathVariable long id) {
		if (orders.existsById(id))
			orders.deleteById(id);
	}
}
