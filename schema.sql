-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger) VALUES ('Cheeseburger');
INSERT INTO burgers (burger) VALUES ('Bacon Burger');
INSERT INTO burgers (burger) VALUES ('Whiskey River BBQ Burger');