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
		productRepository.save(spanner);
	}

}
