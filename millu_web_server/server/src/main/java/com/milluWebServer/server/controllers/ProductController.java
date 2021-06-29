package com.milluWebServer.server.controllers;

import com.milluWebServer.server.models.Product;
import com.milluWebServer.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(value = "/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping(value = "/products/{id}")
    public Optional<Product> getProduct(@PathVariable Long id){
        return productRepository.findById(id);
    }

    @PostMapping(value = "/products")
    public ResponseEntity<Product> postProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/products/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping(value = "/products/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable Long id) {
        Product found = productRepository.getOne(id);
        productRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
