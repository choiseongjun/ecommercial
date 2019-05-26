package go.shop.com.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import go.shop.com.product.domain.BikeInfoEngine;
import go.shop.com.product.domain.Product;
import go.shop.com.product.repository.ProductRepository;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductRepository productRepository;
	
	@PostMapping("/insert")
	public Product createProduct(@RequestBody Product product) {
		
		System.out.println(product.getBikeCc());
		System.out.println(product.getBikeName());
		System.out.println(product.getBikeBrand());
		System.out.println(product.getBikeOrigPrice());
		
		productRepository.save(product);
		return product;
		//return productRepository.save(product);
	}
	
	
	@GetMapping("/list")
	public List<Product> getAllProduct(){
		
		List<Product> productlist=productRepository.findAll();
		
		productlist.forEach(productlist::add);
		return productlist;
	}
	
	@PostMapping("/detail/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable("id") long id){
		
		Optional<Product> productData=productRepository.findById(id);
		if(productData.isPresent()) {
			return new ResponseEntity<>(productData.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable("id") Long id,@RequestBody Product product){
	
		Optional<Product> productData=productRepository.findById(id);
		if(productData.isPresent()) {
			
			return null;
		}else {
			
			return null;
		}
	}
	
}
