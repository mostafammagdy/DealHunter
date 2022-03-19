package ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ecommerce.model.Item;
import ecommerce.service.ItemService;

@SpringBootApplication
public class ECommerceAPI {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(ECommerceAPI.class, args);	
	}
	
	@Autowired
	private ItemService itemService;
	public void run(String... args) throws Exception{
		
		Item item = new Item();
		this.itemService.addItem(new Item(15, "iPhone11", "amazing phone","iPhone", "Apple", 1000, 50));
		this.itemService.addItem(new Item(20, "Samsungs19", "better phone","Samsung", "Samsung Inc", 1000, 50));
		this.itemService.addItem(new Item(15, "ToshibaTV", "amazing TV","Toshiba", "big inc", 1000, 50));
	}
}