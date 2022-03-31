package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ecommerce.model.Item;
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
	
	//add custom queries heres
	
	@Query(value = "SELECT DISTINCT brand from item ORDER BY brand", nativeQuery = true)
	List<String> findAllBrands();
	
	@Query(value = "select distinct type from item order by type", nativeQuery = true)
	List<String> findAllTypes();

	@Query(value = "select * from item where "
			+ "(:brand is null or brand = :brand) and  "
			+ "(:type is null or type = :type) and "
			+ "(:query is null or LOWER(name) LIKE :query or "
			+ "LOWER(description) LIKE :query)", nativeQuery = true)
	List<Item> findAllFiltered(String brand, String type, String query);
	
}
