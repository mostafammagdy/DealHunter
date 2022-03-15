package ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ecommerce.model.Item;
import ecommerce.repository.ItemRepository;

@SpringBootApplication

public class DealHunterApplication  {
	@Autowired ItemRepository ob; 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(DealHunterApplication.class, args);	
	}
	

}

