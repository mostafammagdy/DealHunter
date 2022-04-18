package ecommerce.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "PO")
public class Order implements Serializable {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@ManyToOne
	@JoinColumn
	private JwtUser user;

	@NotNull
	private String status;
	
	@NotNull
	private int total_price;
	
	@OneToMany(mappedBy = "order",cascade=CascadeType.ALL)
	private List<OrderItem> orderItems;
	
	public Order() {

	}
	
	public Order(JwtUser jwtUser, String status) {
		super();
		this.user = jwtUser;
		this.status = status;
		this.total_price = 0;
		this.orderItems = new ArrayList<OrderItem>();
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



	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public int getTotal_price() {
		return total_price;
	}


	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}


	public List<OrderItem> getOrderItems() {
		return orderItems;
	}


	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
		
	}
}
