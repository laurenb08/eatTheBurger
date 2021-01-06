-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;
-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  eaten BOOLEAN,
  PRIMARY KEY (id)
);
-- Insert a set of records.
INSERT INTO
  burgers (burger, eaten)
VALUES
  ('Cheeseburger', false);
INSERT INTO
  burgers (burger, eaten)
VALUES
  ('Bacon Burger', false);
INSERT INTO
  burgers (burger, eaten)
VALUES
  ('Whiskey River BBQ Burger', false);