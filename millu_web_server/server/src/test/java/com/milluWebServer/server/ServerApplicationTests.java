package com.milluWebServer.server;

import com.milluWebServer.server.models.Product;
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
		Product spanner = new Product("Spanner", "Handy tool", 4.50, "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_337,q_auto,w_600/c_pad,h_337,w_600/R7723286-01?pgw=1");
		productRepository.save(spanner);

		Product hammer = new Product("Hammer", "Handy tool", 4.50, "https://www.fourseasonsfencing.co.uk/shop/wp-content/uploads/2016/12/Claw-hammer..jpg");
		productRepository.save(hammer);

		Product screwdriver = new Product("screwdriver", "Handy tool", 4.50, "https://upload.wikimedia.org/wikipedia/commons/1/1c/Screw_Driver_display.jpg");
		productRepository.save(screwdriver);

		Product coolSocks = new Product("Cool Socks", "Keeps feet warm", 4, "https://www.bewooden.com/picture/5d1ce293a3a7c/w960/0-geomess-socks.jpg");
		productRepository.save(coolSocks);

		Product bananaPhone = new Product("banana phone", "tasty cellular device", 300, "https://media.istockphoto.com/photos/banana-phone-picture-id108174529?k=6&m=108174529&s=170667a&w=0&h=XV8Ru2rFZ8JCIOwLiIsm1Aszp-Nmeaxkvi9_64b1mRQ=");
		productRepository.save(bananaPhone);


	}


}
