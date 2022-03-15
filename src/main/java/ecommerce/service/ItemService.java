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
			new Item("spring", "Framework", "desc1"),
			new Item("java", "Core", "desc1"),
			new Item("javascript", "Framework", "desc1")
			));
	public List<Item> getAllItems(){
		return items;
	}
	
	public Item getItem(String id) {
		//itterate and match id (elegant way)
		return items.stream().filter(t -> t.getId().equals(id)).findFirst().get();
	}

	public void addItem(Item item) {
		// TODO Auto-generated method stub
		items.add(item);
	}

	public void updateItem(String id, Item item) {
		// TODO Auto-generated method stub
		for(int i = 0; i < items.size(); i++) {
			Item p = items.get(i);
			if (p.getId().equals(id)) {
				items.set(i, item);
				return;
			}
		}
	}

	public void deleteItem(String id) {
		
		// TODO Auto-generated method stub
		items.removeIf(t -> t.getId().equals(id));
	}
}
