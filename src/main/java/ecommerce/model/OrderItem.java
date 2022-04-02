package ecommerce.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "POItem")
public class OrderItem implements Serializable{
	
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
	private Order order;
	
	
	public OrderItem() {

	}


	public OrderItem(long id, int price, int quantity, Item item, Order order) {
		super();
		this.id = id;
		this.price = price;
		this.quantity = quantity;
		this.item = item;
		this.order = order;
	}
	
	
	public OrderItem(int quantity, Item item, Order order) {
		super();
		this.price = item.getPrice();
		this.quantity = quantity;
		this.item = item;
		this.order = order;
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


	public long getOrder() {
		return order.getId();
	}


	public void setOrder(Order order) {
		this.order = order;
	}

	
}
