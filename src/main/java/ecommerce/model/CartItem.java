package ecommerce.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cart_items")
public class CartItem implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(nullable = false)
	private int cust_id;
	
	@Column(nullable = false)
	private int product_id;

	public CartItem() {
		
	}
	
	public CartItem(long id, int quantity, int product_id, int cust_id) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.cust_id = cust_id;
		this.product_id = product_id;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getProductId() {
		return product_id;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	

	public int getCustId() {
		return cust_id;
	}
	
}
