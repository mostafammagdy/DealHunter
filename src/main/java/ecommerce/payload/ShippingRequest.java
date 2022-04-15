package ecommerce.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class ShippingRequest {

	@NotBlank
	private String shippingAddress;
	@NotBlank
    private String shippingCity;
	@NotBlank
	private String shippingPostalCode; 
	@NotBlank
	private String shippingCountry;
	@NotBlank
	private String shippingProvince;
	
	long id; 
	
	ShippingRequest(){
		this.shippingAddress=shippingAddress;
		this.shippingCity=shippingCity;
		this.shippingPostalCode=shippingPostalCode;
		this.shippingProvince=shippingProvince;
		this.id=id;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public String getShippingCity() {
		return shippingCity;
	}

	public void setShippingCity(String shippingCity) {
		this.shippingCity = shippingCity;
	}

	public String getShippingPostalCode() {
		return shippingPostalCode;
	}

	public void setShippingPostalCode(String shippingPostalCode) {
		this.shippingPostalCode = shippingPostalCode;
	}

	public String getShippingCountry() {
		return shippingCountry;
	}

	public void setShippingCountry(String shippingCountry) {
		this.shippingCountry = shippingCountry;
	}

	public String getShippingProvince() {
		return shippingProvince;
	}

	public void setShippingProvince(String shippingProvince) {
		this.shippingProvince = shippingProvince;
	}
	

}