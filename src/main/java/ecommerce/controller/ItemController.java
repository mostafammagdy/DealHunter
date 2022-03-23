package ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.model.Item;
import ecommerce.service.ItemService;

@RestController
@RequestMapping("/items")
public class ItemController {	
	
	@Autowired
	private ItemService itemService;
	
	
	@GetMapping()
	public List<Item> getAll(
			@RequestParam(name = "brand", required = false) String brand,
			@RequestParam(name = "type", required = false) String type			
			) {
		return itemService.getAllItemsFiltered(brand, type);
	}
	
	@GetMapping("/brands")
	public List<String> getBrands(){
		return itemService.getBrands();
	}
	
	@GetMapping("/types")
	public List<String> getTypes(){
		return itemService.getTypes();
	}
	
	@RequestMapping("/{id}")
	public Item getItem(@PathVariable long id) {
		return itemService.getItem(id);
	}
	//for POST you need to specify method
	@RequestMapping(method=RequestMethod.POST)
	public void addItem(@RequestBody Item item) {
		itemService.addItem(item);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/{id}")
	public void updateItem(@RequestBody Item item, @PathVariable long id) {
		itemService.updateItem(id,item);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{id}")
	public void deleteItem(@PathVariable long id) {
		itemService.deleteItem(id);
	}
	
}

