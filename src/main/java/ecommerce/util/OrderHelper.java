package ecommerce.util;

public class OrderHelper {
	
	private long item;
	
	private int quantity;
	

	public OrderHelper() {
		
	}

	public OrderHelper(long item, int quantity) {
		super();
		this.item = item;
		this.quantity = quantity;
	}

	public long getItem() {
		return item;
	}

	public void setItem(long item) {
		this.item = item;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
