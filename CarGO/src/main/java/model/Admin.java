/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:27:03 
 */
package model;

import java.util.Date;

/**
 * @ClassName: Admin
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:27:03
 */
public class Admin extends User{
	
	protected int userId;
	
	/**
	 * @Title:Admin
	 * @Description:TODO
	 * @param userId
	 */
	public Admin(int userId) {
		super(userId);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @Title:Admin
	 * @Description:TODO
	 * @param userId
	 * @param firstName
	 * @param lastName
	 * @param email
	 * @param password
	 * @param phone
	 * @param dob
	 * @param zip
	 */
	public Admin(int userId, String firstName, String lastName, String email, String password, String phone, Date dob,
			int zip) {
		super(userId, firstName, lastName, email, password, phone, dob, zip);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @Title:Admin
	 * @Description:TODO
	 * @param firstName
	 * @param lastName
	 * @param email
	 * @param password
	 * @param phone
	 * @param dob
	 * @param zip
	 */
	public Admin(String firstName, String lastName, String email, String password, String phone, Date dob, int zip) {
		super(firstName, lastName, email, password, phone, dob, zip);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

}
