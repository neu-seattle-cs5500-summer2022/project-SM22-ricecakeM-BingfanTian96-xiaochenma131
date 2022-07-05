/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: dal
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:22:47 
 */
package dal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

/**
 * @ClassName: ConnectionManager
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:22:47
 */
public class ConnectionManager {
	// User to connect to your database instance. By default, this is "root2".
	private final String user = "root";
	// Password for the user.
	private final String password = "Aptx4869";
	// URI to your database server. If running on the same machine, then this is "localhost".
	private final String hostName = "localhost";
	// Port to your database server. By default, this is 3307.
	private final int port= 3306;
	// Name of the MySQL schema that contains your tables.
	private final String schema = "CarGo_5500";
	// Default timezone for MySQL server.
	private final String timezone = "UTC";

	/** Get the connection to the database instance. */
	/**
	 * @Title: getConnection
	 * @Description: Get the connection to the database instance.
	 * @return The connection to the database instance
	 * @throws SQLException Connection
	 * @author bingfantian
	 * @date 2022年7月5日上午1:23:32
	 */
	public Connection getConnection() throws SQLException {
		Connection connection = null;
		try {
			Properties connectionProperties = new Properties();
			connectionProperties.put("user", this.user);
			connectionProperties.put("password", this.password);
			connectionProperties.put("serverTimezone", this.timezone);
			
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				throw new SQLException(e);
			}
			connection = DriverManager.getConnection(
					"jdbc:mysql://" + this.hostName + ":" + this.port + "/" + this.schema + "?useSSL=false",
					connectionProperties);
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return connection;
	}

	/**
	 * @Title: closeConnection
	 * @Description: Close the connection to the database instance.
	 * @param connection
	 * @throws SQLException void
	 * @author bingfantian
	 * @date 2022年7月5日上午1:24:20
	 */
	public void closeConnection(Connection connection) throws SQLException {
		try {
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
}
