package ecommerce.payload;

import javax.persistence.Column;

public class AddressRequest {
	
	    private String address;
	    private String city; 
	    private String postalCode; 
	    private String country; 
	    long id;
	     
		public String getAddress() {
			return address;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public void setAddress(String address) {
			this.address = address;
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
}
