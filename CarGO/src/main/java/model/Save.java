/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:04:04 
 */
package model;

/**
 * @ClassName: Save
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:04:04
 */
public class Save {
	
	protected int saveId;
	protected Car car;
	protected User User;
	
	/**
	 * @Title:Save
	 * @Description: This is the constructor for Save object.
	 * @param saveId
	 * @param car
	 * @param user
	 */
	public Save(int saveId, Car car, model.User user) {
		super();
		this.saveId = saveId;
		this.car = car;
		User = user;
	}

	/**
	 * @Title:Save
	 * @Description: This is the constructor for Save object.
	 * @param car
	 * @param user
	 */
	public Save(Car car, model.User user) {
		super();
		this.car = car;
		User = user;
	}

	/**
	 * @return the saveId
	 */
	public int getSaveId() {
		return saveId;
	}

	/**
	 * @param saveId the saveId to set
	 */
	public void setSaveId(int saveId) {
		this.saveId = saveId;
	}

	/**
	 * @return the car
	 */
	public Car getCar() {
		return car;
	}

	/**
	 * @param car the car to set
	 */
	public void setCar(Car car) {
		this.car = car;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return User;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		User = user;
	}

}
