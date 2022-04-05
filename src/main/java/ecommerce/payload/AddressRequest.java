package ecommerce.payload;

import javax.persistence.Column;

public class AddressRequest {
	
	    private String address1;

	 
	    private String city; 
	    
	
	    private String postalCode; 
	    
	
	    private String country; 
	    
	 
	    private String telephone;


		public String getAddress1() {
			return address1;
		}


		public void setAddress1(String address1) {
			this.address1 = address1;
		}


		public String getCity() {
			return city;
		}


		public void setCity(String city) {
			this.city = city;
		}


		public String getPostalCode() {
			return postalCode;
		}


		public void setPostalCode(String postalCode) {
			this.postalCode = postalCode;
		}


		public String getCountry() {
			return country;
		}


		public void setCountry(String country) {
			this.country = country;
		}


		public String getTelephone() {
			return telephone;
		}


		public void setTelephone(String telephone) {
			this.telephone = telephone;
		}
}
