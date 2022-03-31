package ecommerce.service;

import java.util.ArrayList;
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
	 * Get all Items from db.<br>
	 * Obsolete in favor of 
	 * {@link ItemService#getAllItemsFiltered(String, String)}
	 * @return
	 */
	public List<Item> getAllItems(){
		return items.findAll();
	}
	
	/**
	 * Get all Items from db.
	 * If brand,type, or query params were provided, filter non-matching rows.
	 * Otherwise ignored if null.
	 * @param brand
	 * @param type
	 * @param query 
	 * @return
	 */
	public List<Item> getAllItemsFiltered(String brand, String type, String query) {
		
		if (query == null){
			return items.findAllFiltered(brand, type, query);
		}
		else {
//			take a string like "Foo Bar" and process it into "%foo%%bar%" for SQL LIKE matching
			String processedQuery = "%" + String.join("%%",query.toLowerCase().split(" ")) + "%";
			return items.findAllFiltered(brand, type, processedQuery);
		}
		
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
	
	/**
	 * Gets an ordered list of all brands
	 * @return
	 */
	public List<String> getBrands() {
		List<String> brands = new ArrayList<String>();
		brands.addAll(items.findAllBrands());
		return brands;
	}
	
	/**
	 * Gets an ordered list of all types 
	 * @return
	 */
	public List<String> getTypes() {
		List<String> types = new ArrayList<String>();
		types.addAll(items.findAllTypes());
		return types;
	}


}
