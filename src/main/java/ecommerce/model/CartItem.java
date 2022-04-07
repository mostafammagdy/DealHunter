package ecommerce.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Cart_Item")
public class CartItem implements Serializable{
	
	@Id
	@GeneratedValue
	private long id;
	
	private int price;
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn()
	private Item item;
	
	@ManyToOne
	@JoinColumn()
	private Cart cart;
	
	
	public CartItem() {

	}


	public CartItem(long id, int price, int quantity, Item item, Cart cart) {
		super();
		this.id = id;
		this.price = price;
		this.quantity = quantity;
		this.item = item;
		this.cart = cart;
	}
	
	
	public CartItem(int quantity, Item item, Cart cart) {
		super();
		this.price = item.getPrice();
		this.quantity = quantity;
		this.item = item;
		this.cart = cart;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Item getItem() {
		return item;
	}


	public void setItem(Item item) {
		this.item = item;
	}


	public long getCart() {
		return cart.getId();
	}


	public void setCart(Cart cart) {
		this.cart = cart;
	}

	
}
