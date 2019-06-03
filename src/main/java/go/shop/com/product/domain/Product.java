package go.shop.com.product.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import go.shop.com.productDetail.domain.ProductDetail;
import lombok.Getter;
import lombok.Setter;

/**
* @author 김여
* @version 2019.04.30 v1.0
*/

@Entity
@Table(name="tb_bike")
@Getter
@Setter
public class Product {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bike_seq")
	private Long bikeSeq;
	
	@Column(name="bike_name")
	private String bikeName;
	
	@Column(name="bike_cc")
	private String bikeCc;
	
	@Column(name="bike_orig_price")
	private Long bikeOrigPrice;
	
	@Column(name="bike_brand")
	private String bikeBrand;
	
	@Column(name="bike_ctry")
	private String bikeCtry;
	
	@Column(name="bike_kind")
	private String bikeKind;
	
	@OneToOne(mappedBy = "product")
	private BikeInfoEngine bikeInfoEngine;
	
 
}
