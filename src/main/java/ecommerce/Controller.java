package ecommerce;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	/*
	 * general controller
	 */
	@RequestMapping("/hello")
	public String hi() {
		return "Hi!";
	}
	
}
