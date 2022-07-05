/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:14:42 
 */
package model;

import java.util.Date;

/**
 * @ClassName: Review
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午6:14:42
 */
public class Review {
	protected int reviewId;
	protected Date date;
	protected String reviewContent;
	protected double rating;
	protected User buyer;
	protected User seller;
	
	/**
	 * @Title:Review
	 * @Description: This is the constructor for Review object.
	 * @param reviewId
	 * @param date
	 * @param reviewContent
	 * @param rating
	 * @param buyer
	 * @param seller
	 */
	public Review(int reviewId, Date date, String reviewContent, double rating, User buyer, User seller) {
		super();
		this.reviewId = reviewId;
		this.date = date;
		this.reviewContent = reviewContent;
		this.rating = rating;
		this.buyer = buyer;
		this.seller = seller;
	}

	/**
	 * @Title:Review
	 * @Description: This is the constructor for Review object.
	 * @param date
	 * @param reviewContent
	 * @param rating
	 * @param buyer
	 * @param seller
	 */
	public Review(Date date, String reviewContent, double rating, User buyer, User seller) {
		super();
		this.date = date;
		this.reviewContent = reviewContent;
		this.rating = rating;
		this.buyer = buyer;
		this.seller = seller;
	}

	/**
	 * @Title:Review
	 * @Description: This is the constructor for Review object.
	 * @param reviewId
	 */
	public Review(int reviewId) {
		super();
		this.reviewId = reviewId;
	}

	/**
	 * @return the reviewId
	 */
	public int getReviewId() {
		return reviewId;
	}

	/**
	 * @param reviewId the reviewId to set
	 */
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * @return the reviewContent
	 */
	public String getReviewContent() {
		return reviewContent;
	}

	/**
	 * @param reviewContent the reviewContent to set
	 */
	public void setReviewContent(String reviewContent) {
		this.reviewContent = reviewContent;
	}

	/**
	 * @return the rating
	 */
	public double getRating() {
		return rating;
	}

	/**
	 * @param rating the rating to set
	 */
	public void setRating(double rating) {
		this.rating = rating;
	}

	/**
	 * @return the buyer
	 */
	public User getBuyer() {
		return buyer;
	}

	/**
	 * @param buyer the buyer to set
	 */
	public void setBuyer(User buyer) {
		this.buyer = buyer;
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
