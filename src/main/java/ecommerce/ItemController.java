package ecommerce;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@RequestMapping("/items")
	public List<Item> getAll() {
		return itemService.getAllItems() ;
	}
	
	@RequestMapping("/items/{id}")
	public Item getItem(@PathVariable String id) {
		return itemService.getItem(id);
	}
	//for POST you need to specify method
	@RequestMapping(method=RequestMethod.POST, value="/items")
	public void addItem(@RequestBody Item item) {
		itemService.addItem(item);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/items/{id}")
	public void updateItem(@RequestBody Item item,@PathVariable String id) {
		itemService.updateItem(id,item);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/items/{id}")
	public void deleteItem(@PathVariable String id) {
		itemService.deleteItem(id);
	}
}

