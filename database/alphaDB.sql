-- Alpha Testing Database for Toothflex App user

-- @author Sean Ebenmelu
-- @version Fall, 2021

-- Do we need to get the person's gender


DROP User IF EXISTS;


-- create app schema

CREATE TABLE User (
  userID int PRIMARY KEY,
  name varchar(30),
  DOB date NOT NULL,
  gender varchar(10)
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  profilePIC varchar(100),
  brushGoal int
);

CREATE TABLE Friend (
  ID int REFERENCES user(userID),
  friendID int
);

-- I had to break the event node into other tables
-- because we can't have plurals.

CREATE TABLE pictures (
  picID int PRIMARY KEY,
  format varchar(10),
  dateOfCapture date
);

CREATE TABLE activity (
  eventID int PRIMARY KEY,
  startTime timeStamp,
  endTime timeStamp
);

-- Allow users to select data from the tables.
GRANT SELECT ON person TO PUBLIC;
GRANT SELECT ON activity TO PUBLIC;
