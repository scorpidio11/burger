-- Create the burgers_db
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

  -- Inserted a set of records into the table
  INSERT INTO burgers (burger_name,devoured)
  VALUES ('Turkey Burger',false);
  
  INSERT INTO burgers (burger_name,devoured)
  VALUES ('Angus Burger',false);
  
  INSERT INTO burgers (burger_name,devoured)
  VALUES ('Veggie Burger',false);

   
