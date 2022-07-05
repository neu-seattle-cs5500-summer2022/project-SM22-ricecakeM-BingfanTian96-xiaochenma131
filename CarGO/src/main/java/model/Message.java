/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: model
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:51:41 
 */
package model;

import java.util.Date;

/**
 * @ClassName: Message
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月4日 下午5:51:41
 */
public class Message {
	protected int messageId;
    protected Date sendTime;
    protected String content;
    protected User from;
    protected User to;
    
	/**
	 * @Title:Message
	 * @Description: This is the constructor for Message object.
	 * @param messageId
	 * @param sendTime
	 * @param content
	 * @param from
	 * @param to
	 */
	public Message(int messageId, Date sendTime, String content, User from, User to) {
		super();
		this.messageId = messageId;
		this.sendTime = sendTime;
		this.content = content;
		this.from = from;
		this.to = to;
	}
	
	/**
	 * @Title:Message
	 * @Description: This is the constructor for Message object.
	 * @param sendTime
	 * @param content
	 * @param from
	 * @param to
	 */
	public Message(Date sendTime, String content, User from, User to) {
		super();
		this.sendTime = sendTime;
		this.content = content;
		this.from = from;
		this.to = to;
	}

	/**
	 * @return the messageId
	 */
	public int getMessageId() {
		return messageId;
	}

	/**
	 * @param messageId the messageId to set
	 */
	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}

	/**
	 * @return the sendTime
	 */
	public Date getSendTime() {
		return sendTime;
	}

	/**
	 * @param sendTime the sendTime to set
	 */
	public void setSendTime(Date sendTime) {
		this.sendTime = sendTime;
	}

	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}

	/**
	 * @param content the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * @return the from
	 */
	public User getFrom() {
		return from;
	}

	/**
	 * @param from the from to set
	 */
	public void setFrom(User from) {
		this.from = from;
	}

	/**
	 * @return the to
	 */
	public User getTo() {
		return to;
	}

	/**
	 * @param to the to to set
	 */
	public void setTo(User to) {
		this.to = to;
	}
    
    

}
