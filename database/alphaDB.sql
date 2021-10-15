-- Alpha Testing Database for Toothflex App user

-- @author Sean Ebenmelu
-- @version Fall, 2021

-- Do we need to get the person's gender


-- create app schema
CREATE TABLE person (
  name varchar(30),
  DOB date NOT NULL,
  gender varchar(10)
);

CREATE TABLE user (
  userID int PRIMARY KEY,
  name varchar(30) REFERENCES person(name),
  DOB date REFERENCES person(DOB),
  gender varchar(10) REFERENCES person(gender),
  email varchar(50) NOT NULL,
  password varchar(50)
);

CREATE TABLE friend (
  userID int REFERENCES user(userID)
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
  minAge int,
);

-- Allow users to select data from the tables.
GRANT SELECT ON person TO PUBLIC;
GRANT SELECT ON activity TO PUBLIC;
