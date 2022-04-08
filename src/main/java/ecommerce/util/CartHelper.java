package ecommerce.util;

public class CartHelper {
	
	private long item;
	
	private int quantity;
	

	public CartHelper() {
		
	}

	public CartHelper(long item, int quantity) {
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
