package ecommerce.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "Cart")
public class Cart implements Serializable {


	@Id
	@GeneratedValue
	private long id;

	@ManyToOne
	@JoinColumn
	private JwtUser user;
	
	@NotNull
	private int total_price;
	
	@OneToMany(mappedBy = "cart")
	private List<CartItem> cartItems;
	
	public Cart() {

	}


	public Cart(long id, JwtUser user, String status) {
		super();
		this.id = id;
		this.user = user;
		this.total_price = 0;
		this.cartItems = new ArrayList<CartItem>();
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public JwtUser getUser() {
		return user;
	}



	public void setUser(JwtUser user) {
		this.user = user;
	}



	public int getTotal_price() {
		return total_price;
	}


	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}


	public List<CartItem> getCartItems() {
		return cartItems;
	}


	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
		
	}


}
