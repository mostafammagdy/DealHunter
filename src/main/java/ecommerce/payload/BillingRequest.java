package ecommerce.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class BillingRequest {

	@NotBlank
	private String billingAddress;
	@NotBlank
    private String billingCity;
	@NotBlank
	private String billingPostalCode; 
	@NotBlank
	private String billingCountry;
	@NotBlank
	private String billingProvince;
	
	long id; 
	
	BillingRequest(){
		this.billingAddress=billingAddress;
		this.billingCity=billingCity;
		this.billingPostalCode=billingPostalCode;
		this.billingProvince=billingProvince;
		this.id=id;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}
	public String getBillingCity() {
		return billingCity;
	}
	public void setBillingCity(String billingCity) {
		this.billingCity = billingCity;
	}
	public String getBillingPostalCode() {
		return billingPostalCode;
	}
	public void setBillingPostalCode(String billingPostalCode) {
		this.billingPostalCode = billingPostalCode;
	}
	public String getBillingCountry() {
		return billingCountry;
	}
	public void setBillingCountry(String billingCountry) {
		this.billingCountry = billingCountry;
	}
	public String getBillingProvince() {
		return billingProvince;
	}
	public void setBillingProvince(String billingProvince) {
		this.billingProvince = billingProvince;
	}
}
