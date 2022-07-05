/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:52:30 
 */
package model;


/**
 * @ClassName: Car
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:52:30
 */
public class Car {

	protected String vin;
	protected int year;
	protected String make;
	protected String model;
	protected String trim;
	protected String body;
	protected String transmission;
	protected String state;
	protected int odometer;
	protected double carCondition;
	protected String color;
	protected String interior;
	protected int mmr;
	protected int sellingPrice;
	protected User seller;
	
	/**
	 * @Title:Car
	 * @Description: This is the constructor for Car object.
	 * @param vin 			The unique Vin number of the car.
	 * @param year 			The year of the car.
	 * @param make 			The make of the car.
	 * @param model 		The model of the car.
	 * @param trim 			The trim of the car.
	 * @param body 			The body type of the car.
	 * @param transmission 	The type of transmission of the car.
	 * @param state 		The state of the car.
	 * @param odometer 		The odometer of the car.
	 * @param carCondition 	The condition of the car.
	 * @param color 		The outside color of the car.
	 * @param interior 		The interior color of the car.
	 * @param mmr 			The mmr of the car.
	 * @param sellingPrice 	The selling price of the car
	 * @param seller		The seller of the car.
	 */
	public Car(String vin, int year, String make, String model, String trim, String body, String transmission,
			String state, int odometer, double carCondition, String color, String interior, int mmr, int sellingPrice,
			User seller) {
		super();
		this.vin = vin;
		this.year = year;
		this.make = make;
		this.model = model;
		this.trim = trim;
		this.body = body;
		this.transmission = transmission;
		this.state = state;
		this.odometer = odometer;
		this.carCondition = carCondition;
		this.color = color;
		this.interior = interior;
		this.mmr = mmr;
		this.sellingPrice = sellingPrice;
		this.seller = seller;
	}

	/**
	 * @Title:Car
	 * @Description: This is the constructor for Car object.
	 * @param vin	The unique Vin number of the car.
	 */
	public Car(String vin) {
		super();
		this.vin = vin;
	}

	/**
	 * @return the vin
	 */
	public String getVin() {
		return vin;
	}

	/**
	 * @param vin the vin to set
	 */
	public void setVin(String vin) {
		this.vin = vin;
	}

	/**
	 * @return the year
	 */
	public int getYear() {
		return year;
	}

	/**
	 * @param year the year to set
	 */
	public void setYear(int year) {
		this.year = year;
	}

	/**
	 * @return the make
	 */
	public String getMake() {
		return make;
	}

	/**
	 * @param make the make to set
	 */
	public void setMake(String make) {
		this.make = make;
	}

	/**
	 * @return the model
	 */
	public String getModel() {
		return model;
	}

	/**
	 * @param model the model to set
	 */
	public void setModel(String model) {
		this.model = model;
	}

	/**
	 * @return the trim
	 */
	public String getTrim() {
		return trim;
	}

	/**
	 * @param trim the trim to set
	 */
	public void setTrim(String trim) {
		this.trim = trim;
	}

	/**
	 * @return the body
	 */
	public String getBody() {
		return body;
	}

	/**
	 * @param body the body to set
	 */
	public void setBody(String body) {
		this.body = body;
	}

	/**
	 * @return the transmission
	 */
	public String getTransmission() {
		return transmission;
	}

	/**
	 * @param transmission the transmission to set
	 */
	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	/**
	 * @return the state
	 */
	public String getState() {
		return state;
	}

	/**
	 * @param state the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}

	/**
	 * @return the odometer
	 */
	public int getOdometer() {
		return odometer;
	}

	/**
	 * @param odometer the odometer to set
	 */
	public void setOdometer(int odometer) {
		this.odometer = odometer;
	}

	/**
	 * @return the carCondition
	 */
	public double getCarCondition() {
		return carCondition;
	}

	/**
	 * @param carCondition the carCondition to set
	 */
	public void setCarCondition(double carCondition) {
		this.carCondition = carCondition;
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(String color) {
		this.color = color;
	}

	/**
	 * @return the interior
	 */
	public String getInterior() {
		return interior;
	}

	/**
	 * @param interior the interior to set
	 */
	public void setInterior(String interior) {
		this.interior = interior;
	}

	/**
	 * @return the mmr
	 */
	public int getMmr() {
		return mmr;
	}

	/**
	 * @param mmr the mmr to set
	 */
	public void setMmr(int mmr) {
		this.mmr = mmr;
	}

	/**
	 * @return the sellingPrice
	 */
	public int getSellingPrice() {
		return sellingPrice;
	}

	/**
	 * @param sellingPrice the sellingPrice to set
	 */
	public void setSellingPrice(int sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	/**
	 * @return the seller
	 */
	public User getSeller() {
		return seller;
	}

	/**
	 * @param seller the seller to set
	 */
	public void setSeller(User seller) {
		this.seller = seller;
	}
	
}
