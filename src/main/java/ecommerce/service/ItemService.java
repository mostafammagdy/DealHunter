package ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.model.Item;
import ecommerce.repository.ItemRepository;

//Spring business service
@Service
public class ItemService {

	@Autowired
	private ItemRepository items;
	/**
	 * Get all Items from db
	 * @return
	 */
	public List<Item> getAllItems(){
		return items.findAll();
	}
	
	/**
	 * Get an Item with matching id, or throws 
	 * @param id
	 * @return
	 */
	public Item getItem(long id) {
		return items.findById(id).get();
	}

	/**
	 * Adds a new Item to db
	 * if id was used previously, a new id is automatically used instead.
	 * @param item
	 * @return
	 */
	public void addItem(Item item) {
		if (!items.existsById(item.getId()))
			items.saveAndFlush(item);

	}

	/**
	 * Adds a new Item to db, or update existing one with matching id
	 * @param id
	 * @param item
	 */
	public void updateItem(long id, Item item) {
		item.setId(id);
		items.save(item);


	}

	/**
	 * Deletes Item with matching id from db
	 * @param id
	 */
	public void deleteItem(long id) {
		if (items.existsById(id)) {
			items.deleteById(id);
		}
	}
}
