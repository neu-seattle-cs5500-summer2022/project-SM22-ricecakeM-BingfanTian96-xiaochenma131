/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:16:22 
 */
package model;

/**
 * @ClassName: Search
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:16:22
 */
public class Search {
	
	protected int searchId;
	protected int year;
	protected String make;
	protected String model;
	protected String state;
	protected User user;
	
	/**
	 * @Title:Search
	 * @Description: This is the constructor for Search object.
	 * @param searchId
	 * @param year
	 * @param make
	 * @param model
	 * @param state
	 * @param user
	 */
	public Search(int searchId, int year, String make, String model, String state, User user) {
		super();
		this.searchId = searchId;
		this.year = year;
		this.make = make;
		this.model = model;
		this.state = state;
		this.user = user;
	}

	/**
	 * @Title:Search
	 * @Description: This is the constructor for Search object.
	 * @param year
	 * @param make
	 * @param model
	 * @param state
	 * @param user
	 */
	public Search(int year, String make, String model, String state, User user) {
		super();
		this.year = year;
		this.make = make;
		this.model = model;
		this.state = state;
		this.user = user;
	}

	/**
	 * @Title:Search
	 * @Description: This is the constructor for Search object.
	 * @param searchId
	 */
	public Search(int searchId) {
		super();
		this.searchId = searchId;
	}

	/**
	 * @return the searchId
	 */
	public int getSearchId() {
		return searchId;
	}

	/**
	 * @param searchId the searchId to set
	 */
	public void setSearchId(int searchId) {
		this.searchId = searchId;
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
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	
}
