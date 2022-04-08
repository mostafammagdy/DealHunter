
package ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.model.Item;
import ecommerce.model.Cart;
import ecommerce.model.CartItem;
import ecommerce.repository.ItemRepository;
import ecommerce.repository.JwtUserRepository;
import ecommerce.repository.CartItemRepository;
import ecommerce.repository.CartRepository;
import ecommerce.util.CartHelper;

@Service
public class CartService {
	
	@Autowired
	private CartRepository carts;
	@Autowired
	private ItemRepository items;
	@Autowired
	private CartItemRepository cart_items;
	@Autowired
	private JwtUserRepository users;
	
	/**
	 * Get a list of all orders
	 * @return
	 */
	public List<Cart> getAll(){
		return carts.findAll();
	}
	
	/**
	 * get a list of orders by a user specified by id
	 * @param id
	 * @return
	 */
	public List<Cart> getByUser(int id){
		return carts.findByUser_Id(id);
	}
	

	public Cart createAndPull(String user, List<CartHelper> cartItems) {
		
		Cart cart = new Cart(users.findByEmail(user));
		int totalPrice = 0;
		for (CartHelper cartHelper : cartItems) {
			Item item = items.getOne(cartHelper.getItem());
			// max order quantity is the item's stock quantity
			int quantity = Math.min(item.getQuantity(), cartHelper.getQuantity());
			// create and save OrderItem
			CartItem cartItem = new CartItem(quantity, item, cart);
			cart_items.save(cartItem);
			// add to other side of relationship
			cart.getCartItems().add(cartItem);
			// update order total price
			totalPrice +=  cartItem.getPrice() * quantity;
		}
		cart.setTotal_price(totalPrice);
		carts.save(cart);
		return cart;		
	}
	
	
	/**
	 * Create a new order
	 * @param order
	 * @return
	 */
	public Cart create(Cart cart) {
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
	public void addItemToCart(
			long id, 
			long item_id,
			int quantity) {
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
//	public String checkout(long id) {
//		if(!orders.existsById(id)) {
//			return "No order with that id.";
//		}
//		Order order = orders.getOne(id);
//		
//		if (!order.getStatus().equals("started")) {
//			return "Order already finished or rejected.";
//		}
//		// rejecting 1/3 orders
//		if (order.getId() % 3 == 0) {
//			order.setStatus("rejected");
//			return "Order rejected.";
//		}
//		
//		// subtract item stock quantities
//		for (OrderItem orderItem: order.getOrderItems()) {
//			Item item = orderItem.getItem();
//			item.setQuantity(item.getQuantity() - orderItem.getQuantity());
//			items.save(item);
//		}
//		order.setStatus("finished");
//		orders.save(order);
//		return "Successful Checkout.";
//		
//		
//	}
	
	/**
	 * Updates an Order
	 * @param order
	 * @param id
	 * @return
	 */
	public Cart update(Cart cart, long id) {
		cart.setId(id);
		return carts.save(cart);
	}
	
	/**
	 * delete an Order
	 * @param id
	 */
	public void delete(long id) {
		if (carts.existsById(id))
			carts.deleteById(id);
	}

}