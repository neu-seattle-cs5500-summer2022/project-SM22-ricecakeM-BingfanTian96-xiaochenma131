package model;

import java.util.Date;

/**
 * @ClassName: User
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:24:10
 */
public class User {
	protected int userId;
	protected String firstName;
	protected String lastName;
	protected String email;
	protected String password;
	protected String phone;
	protected Date dob;
	protected int zip;
	
	/**
	 * @Title:User
	 * @Description: This is the constructor for User object.
	 * @param userId
	 * @param firstName
	 * @param lastName
	 * @param email
	 * @param password
	 * @param phone
	 * @param dob
	 * @param zip
	 */
	public User(int userId, String firstName, String lastName, String email, String password, String phone, Date dob,
			int zip) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.dob = dob;
		this.zip = zip;
	}
	
	/**
	 * @Title:User
	 * @Description: This is the constructor for User object.
	 * @param firstName
	 * @param lastName
	 * @param email
	 * @param password
	 * @param phone
	 * @param dob
	 * @param zip
	 */
	public User(String firstName, String lastName, String email, String password, String phone, Date dob, int zip) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.dob = dob;
		this.zip = zip;
	}
	
	/**
	 * @Title:User
	 * @Description: This is the constructor for User object.
	 * @param userId
	 */
	public User(int userId) {
		super();
		this.userId = userId;
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
	
	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	
	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}
	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}
	/**
	 * @return the dob
	 */
	public Date getDob() {
		return dob;
	}
	/**
	 * @param dob the dob to set
	 */
	public void setDob(Date dob) {
		this.dob = dob;
	}
	/**
	 * @return the zip
	 */
	public int getZip() {
		return zip;
	}
	/**
	 * @param zip the zip to set
	 */
	public void setZip(int zip) {
		this.zip = zip;
	}
	
}
