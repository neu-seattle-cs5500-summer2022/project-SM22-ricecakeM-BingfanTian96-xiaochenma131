# Group 5 - CarGo
# Bingfan Tian
# CS5500 - group project
# 6/30/2022

USE CarGo_5500;

#1 admin
INSERT INTO Users(FirstName, LastName, Email, Password, Phone, DOB, ZIP)
	VALUES('test1', 'test1', 'test1@gmail.com', 'passwords', '123-123-1234', '2000.1.1', 90109);
#2 seller
INSERT INTO Users(FirstName, LastName, Email, Password, Phone, DOB, ZIP)
	VALUES('test2', 'test2', 'test2@gmail.com', 'passwords', '123-123-1234', '2000.1.1', 90109);
#3 buyer
INSERT INTO Users(FirstName, LastName, Email, Password, Phone, DOB, ZIP)
	VALUES('test3', 'test3', 'test3@gmail.edu', 'passwords', '123-123-1234', '2000.1.1', 90109);
#4 buyer
INSERT INTO Users(FirstName, LastName, Email, Password, Phone, DOB, ZIP)
	VALUES('test4', 'test4', 'test4@gmail.com', 'passwords', '123-123-1234', '2000.1.1', 90109);
    

insert into Cars(
	Vin, Year, Make, Model, 
    Trim, Body, Transmission, 
    State, Odometer, CarCondition, 
    Color, Interior, Mmr, SellingPrice, UserId)
    VALUES('1C4RJFAG6JC1223334', 2018, 'Jeep', 'Grand Cherokee', 'Limited', 'SUV', 'automatic', 
		'WA', 43990, 4.8, 'Black', 'Black', 29000, 35000, 2);
insert into Cars(
	Vin, Year, Make, Model, 
    Trim, Body, Transmission, 
    State, Odometer, CarCondition, 
    Color, Interior, Mmr, SellingPrice, UserId)
    VALUES('1C4222AG6JC1223334', 2018, 'Jeep', 'Grand Cherokee', 'Limited', 'SUV', 'automatic', 
		'WA', 43990, 4.8, 'Black', 'Black', 29000, 40000, 2);

insert into Cars(
	Vin, Year, Make, Model, 
    Trim, Body, Transmission, 
    State, Odometer, CarCondition, 
    Color, Interior, Mmr, SellingPrice, UserId)
    VALUES('1C4RJFAG6JC491234', 2017, 'BMW', 'X6', 'sport', 'SUV', 'automatic', 
    'WA', 43990, 4.8, 'Blue', 'Black', 29000, 35000, 2);

INSERT INTO Admins(UserId)
	VALUES(1);
    
INSERT INTO Saves(UserId, Vin)
	VALUES(3, '1C4RJFAG6JC1223334');
INSERT INTO Saves(UserId, Vin)
	VALUES(3, '1C4222AG6JC1223334');
INSERT INTO Saves(UserId, Vin)
	VALUES(3, '1C4RJFAG6JC491234');

INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 2, 3);
INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 3, 2);
INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 3, 4);
INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 3, 1);
INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 4, 2);
INSERT INTO Messages(Content, FromId, ToId)
	VALUES('This is a message', 4, 3);
    
INSERT INTO Reviews(ReviewContent, Rating, BuyerId, SellerId)
	VALUES('This is a content', 5.0, 3, 2);
INSERT INTO Reviews(ReviewContent, Rating, BuyerId, SellerId)
	VALUES('This is a content', 4.0, 4, 2);
INSERT INTO Reviews(ReviewContent, Rating, BuyerId, SellerId)
	VALUES('This is a content', 3.0, 1, 2);
    

