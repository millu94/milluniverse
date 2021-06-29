package com.milluWebServer.server;

import com.milluWebServer.server.products.Product;
import com.milluWebServer.server.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ServerApplicationTests {

	@Autowired
	ProductRepository productRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createProduct(){
		Product spanner = new Product("Spanner", "Handy tool", 4.50);
		Product hammer = new Product("Hammer", "Handy tool", 4.50);
		Product screwdriver = new Product("screwdriver", "Handy tool", 4.50);
		productRepository.save(spanner);
		productRepository.save(hammer);
		productRepository.save(screwdriver);
	}


}
