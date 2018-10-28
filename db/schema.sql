-- Create the burgers_db
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers
(
  id INT
  AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN  NOT NULL,
  PRIMARY KEY(id)
);

  -- Inserted a set of records into the table
  INSERT INTO burgers (burger_name,devoured)
  VALUES 
  ("Turkey Burger",true),
  ("Angus Burger" ,false),
  ("Veggie Burger" ,true)

   
