package ecommerce.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Address")
public class Address implements Serializable {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	 @Column(nullable = false) 
    private String street; 
	 @Column(nullable = false)
    private String province; 
	 @Column(nullable = false)
    private String country; 
	 @Column(nullable = false)
	 private String zip; 
	 @Column(nullable = false)
    private String phone; 
    
	 public Address() {
			
	 }
	 
	public Address(int id, String street, String province, String country, String zip, String phone) {
	 this.id=id;
	 this.street = street;
	 this.province=province;
	 this.country =country;
	 this.zip = zip;
	 this.phone=phone;
	}
    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	

	
}
