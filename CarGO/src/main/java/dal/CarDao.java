/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: dal
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:25:38 
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Car;
import model.User;

/**
 * @ClassName: CarDao
 * @Description: The Data access object for Car object.
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:25:38
 */
public class CarDao {
	
	protected ConnectionManager connectionManager;
	private static CarDao instance = null;
	
	/**
	 * @Title:CarDao
	 * @Description: This is the constructor for CarDao object.
	 */
	protected CarDao() {
		connectionManager = new ConnectionManager();
	}
	
	/**
	 * @Title: getInstance
	 * @Description: TODO
	 * @return CarDao
	 * @author bingfantian
	 * @date 2022年7月5日上午1:27:16
	 */
	public static CarDao getInstance() {
		if(instance == null) {
			instance = new CarDao();
		}
		return instance;
	}
	
	/**
	 * @Title: create
	 * @Description: TODO
	 * @param car
	 * @return
	 * @throws SQLException Car
	 * @author bingfantian
	 * @date 2022年7月5日上午1:45:28
	 */
	public Car create(Car car) throws SQLException {
		String insertCar = "INSERT INTO Cars(Vin,Year,Make,Model,Trim,Body,"
				+ "Transmission,State,Odometer,CarCondition,Color,Interior,Mmr,SellingPrice,UserId) "
				+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
		Connection connection = null;
		PreparedStatement insertStmt = null;
		try {
			connection = connectionManager.getConnection();
			insertStmt = connection.prepareStatement(insertCar);
			insertStmt.setString(1,car.getVin());
			insertStmt.setInt(2,car.getYear());
			insertStmt.setString(3,car.getMake());
			insertStmt.setString(4,car.getModel());
			insertStmt.setString(5,car.getTrim());
			insertStmt.setString(6,car.getBody());
			insertStmt.setString(7,car.getTransmission());
			insertStmt.setString(8,car.getState());
			insertStmt.setInt(9,car.getOdometer());
			insertStmt.setDouble(10,car.getCarCondition());
			insertStmt.setString(11,car.getColor());
			insertStmt.setString(12,car.getInterior());
			insertStmt.setInt(13,car.getMmr());
			insertStmt.setInt(14, car.getSellingPrice());
			insertStmt.setInt(15,car.getSeller().getUserId());
			insertStmt.executeUpdate();
			return car;
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
	 * @Title: getObj
	 * @Description: Get cat object from the mysql query results
	 * @param results
	 * @return
	 * @throws SQLException Car
	 * @author bingfantian
	 * @date 2022年7月5日上午1:45:32
	 */
	private Car getObj(ResultSet results) throws SQLException {
		UserDao userDao = UserDao.getInstance();
		String resultVin = results.getString("Vin");
		int resultYear = results.getInt("Year");
		String resultMake = results.getString("Make");
		String resultModel = results.getString("Model");
		String resultTrim = results.getString("Trim");
		String resultBody = results.getString("Body");
		String resultTransmission = results.getString("Transmission");
		String resultState = results.getString("State");
		int resultOdometer = results.getInt("Odometer");
		double resultCarCondition = results.getDouble("CarCondition");
		String resultColor = results.getString("Color");
		String resultInterior = results.getString("Interior");
		int resultMmr = results.getInt("Mmr");
		int resultSellingPrice = results.getInt("SellingPrice");
		int resultUserId = results.getInt("UserId");
		User seller = userDao.getUserByUserId(resultUserId);
		Car car = new Car(resultVin,resultYear,
				resultMake,resultModel,resultTrim,resultBody,
				resultTransmission,resultState,resultOdometer,
				resultCarCondition,resultColor,resultInterior,resultMmr,resultSellingPrice,seller);
		return car;
	}
	
	/**
	 * @Title: getCarByVin
	 * @Description: TODO
	 * @param vin
	 * @return
	 * @throws SQLException Car
	 * @author bingfantian
	 * @date 2022年7月5日上午1:44:18
	 */
	public Car getCarByVin(String vin) throws SQLException {
		String selectCar = "SELECT Vin,Year,Make,Model,Trim,Body,Transmission,State,Odometer,CarCondition,Color,Interior,Mmr,SellingPrice,UserId "
				+ "FROM Cars "
				+ "WHERE Vin=?;";
		Connection connection = null;
		PreparedStatement selectStmt = null;
		ResultSet results = null;
		try {
			connection = connectionManager.getConnection();
			selectStmt = connection.prepareStatement(selectCar);
			selectStmt.setString(1, vin);
			results = selectStmt.executeQuery();
			if(results.next()) {
				return getObj(results);
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
	
	/**
	 * @Title: getCarByParameters
	 * @Description: TODO
	 * @param year
	 * @param make
	 * @param model
	 * @param state
	 * @return
	 * @throws SQLException List<Car>
	 * @author bingfantian
	 * @date 2022年7月5日上午1:44:51
	 */
	public List<Car> getCarByParameters(int year, String make, String model, String state) throws SQLException {
		List<Car> cars = new ArrayList<Car>();
		String select = "SELECT Vin,Year,Make,Model,Trim,Body,Transmission,State,Odometer,CarCondition,Color,Interior,Mmr,SellingPrice,UserId "
				+ "FROM Cars "
				+ "WHERE Year=? AND Make=? AND Model=? AND State=?;";
		
		Connection connection = null;
		PreparedStatement selectStmt = null;
		ResultSet results = null;
		try {
			connection = connectionManager.getConnection();
			selectStmt = connection.prepareStatement(select);
			selectStmt.setInt(1, year);
			selectStmt.setString(2, make);
			selectStmt.setString(3, model);
			selectStmt.setString(4, state);
			results = selectStmt.executeQuery();
			while(results.next()) {
				cars.add(getObj(results));
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
		return cars;
	}
	
}
