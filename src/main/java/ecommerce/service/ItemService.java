package ecommerce.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import ecommerce.model.Item;

//Spring business service
@Service
public class ItemService {

	private List<Item> items = new ArrayList<>(Arrays.asList(
			new Item(0, "Framework", "desc1"),
			new Item(1, "Core", "desc1"),
			new Item(2, "Framework", "desc1")
			));
	public List<Item> getAllItems(){
		return items;
	}
	
	public Item getItem(long id) {
		//itterate and match id (elegant way)
		return items.stream().filter(t -> t.getId() == id).findFirst().get();
	}

	public void addItem(Item item) {
		// TODO Auto-generated method stub
		items.add(item);
	}

	public void updateItem(long id, Item item) {
		// TODO Auto-generated method stub
		for(int i = 0; i < items.size(); i++) {
			Item p = items.get(i);
			if (p.getId() ==id) {
				items.set(i, item);
				return;
			}
		}
	}

	public void deleteItem(long id) {
		
		// TODO Auto-generated method stub
		items.removeIf(t -> t.getId() == id);
	}
}
