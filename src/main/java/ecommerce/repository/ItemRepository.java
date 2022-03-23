package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.model.Item;
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
