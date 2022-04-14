package ecommerce.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart_item")
public class CartItem implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private int price;
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn()
	private Item item;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn()
	private Cart cart;
	
	
	public CartItem() {

	}


	public CartItem(int price, int quantity, Item item, Cart cart) {
		super();
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
