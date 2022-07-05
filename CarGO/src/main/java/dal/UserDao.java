/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: dal
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:29:43 
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Date;

import model.User;

/**
 * @ClassName: UserDao
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:29:43
 */
public class UserDao {
	
	protected ConnectionManager connectionManager;
	private static UserDao instance = null;
	
	/**
	 * @Title:UserDao
	 * @Description: This is the constructor for UserDao object.
	 */
	protected UserDao() {
		connectionManager = new ConnectionManager();
	}
	
	/**
	 * @Title: getInstance
	 * @Description: TODO
	 * @return UserDao
	 * @author bingfantian
	 * @date 2022年7月5日上午1:30:20
	 */
	public static UserDao getInstance() {
		if(instance == null) {
			instance = new UserDao();
		}
		return instance;
	}
	
	/**
	 * @Title: create
	 * @Description: Save the Users instance by storing it in your MySQL instance. 
	 * 					This runs a INSERT statement.
	 * @param user
	 * @return The user that insert into the DB
	 * @throws SQLException User
	 * @author bingfantian
	 * @date 2022年7月5日上午1:35:24
	 */
	public User create(User user) throws SQLException {
		String insertUser = "INSERT INTO User(FirstName, LastName, Email, Password, Phone, DOB, ZIP) " +
        "VALUES(?,?,?,?,?,?,?);";
		Connection connection = null;
		PreparedStatement insertStmt = null;
        ResultSet resultKey = null;
		try {
			connection = connectionManager.getConnection();
			insertStmt = connection.prepareStatement(insertUser,Statement.RETURN_GENERATED_KEYS);
			insertStmt.setString(1, user.getFirstName());
			insertStmt.setString(2, user.getLastName());
			insertStmt.setString(3, user.getEmail());
			insertStmt.setString(4, user.getPassword());
			insertStmt.setString(5, user.getPhone());
			insertStmt.setTimestamp(6, new Timestamp(user.getDob().getTime()));
			insertStmt.setInt(7, user.getZip());

			insertStmt.executeUpdate();
			resultKey = insertStmt.getGeneratedKeys();
			int userId = -1;
			if(resultKey.next()) {
				userId = resultKey.getInt(1);
			} else {
				throw new SQLException("Unable to retrieve auto-generated key.");
			}
			user.setUserId(userId);
			return user;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			if(connection != null) {
				connection.close();
			}
			if(insertStmt != null) {
				insertStmt.close();
			}
		}
	}
	
	/**
	 * @Title: getUserByUserId
	 * @Description: TODO
	 * @param userId
	 * @return
	 * @throws SQLException User
	 * @author bingfantian
	 * @date 2022年7月5日上午1:45:55
	 */
	public User getUserByUserId(int userId) throws SQLException {
		String selectUser = "SELECT UserId,FirstName,LastName,Email,Password,Phone,DOB,ZIP "
				+ "FROM Users WHERE UserId=?;";
		Connection connection = null;
		PreparedStatement selectStmt = null;
		ResultSet results = null;
		try {
			connection = connectionManager.getConnection();
			selectStmt = connection.prepareStatement(selectUser);
			selectStmt.setInt(1, userId);
			results = selectStmt.executeQuery();
			if(results.next()) {
				int resultUserId = results.getInt("UserId");
				String firstName = results.getString("FirstName");
				String lastName = results.getString("LastName");
				String email = results.getString("Email");
                String password = results.getString("Password");
                String phone = results.getString("Phone");
                Date date = results.getDate("DOB");
                int zip = results.getInt("ZIP");
			
				User user = new User(resultUserId, firstName, lastName, email, password, phone, date, zip);
				return user;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			if(connection != null) {
				connection.close();
			}
			if(selectStmt != null) {
				selectStmt.close();
			}
			if(results != null) {
				results.close();
			}
		}
		return null;
	}

}
