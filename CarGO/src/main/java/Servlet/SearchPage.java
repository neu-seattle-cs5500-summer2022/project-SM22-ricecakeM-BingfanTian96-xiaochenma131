/**
 * Copyright © 2022 eSunny Info. Tech Ltd. All rights reserved.
 * @Package: Servlet
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:20:39 
 */
package Servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Car;
import dal.CarDao;


/**
 * @ClassName: SearchPage
 * @Description: TODO
 * @author: bingfantian
 * @date: 2022年7月5日 上午1:20:39
 */
@WebServlet("/Search")
public class SearchPage extends HttpServlet{
	
	protected CarDao carDao;
	
	@Override
	public void init() throws ServletException {
		carDao = CarDao.getInstance();
	}
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// Map for storing messages.
        Map<String, String> messages = new HashMap<String, String>();
        req.setAttribute("messages", messages);
        List<Car> cars = new ArrayList<Car>();
        String year = req.getParameter("year");
    	String make = req.getParameter("make");
    	String model = req.getParameter("model");
    	String state = req.getParameter("state");
    	if (year == null || year.trim().isEmpty() ||
        		make == null || make.trim().isEmpty() ||
        		model == null || model.trim().isEmpty() ||
        		state == null || state.trim().isEmpty()) {
            messages.put("false", "Please enter a valid parameter.");
        } else {
        	try {
        		cars = carDao.getCarByParameters(Integer.valueOf(year), make, model, state);
        	} catch (SQLException e) {
    			e.printStackTrace();
    			throw new IOException(e);
            }
        	messages.put("success", "Displaying results for " + year + " " + make + " " + model + " in " + state);
        	messages.put("previousYear", year);
        	messages.put("previousMake", make);
        	messages.put("previousModel", model);
        	messages.put("previousState", state);
        	
        }
        req.setAttribute("cars", cars);

        req.getRequestDispatcher("/Pages/Search.jsp").forward(req, resp);
	}
}
