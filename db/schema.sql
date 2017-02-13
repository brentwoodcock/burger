# Create the database

CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

# Remove the table if it already exists before creating table again
DROP TABLE IF EXISTS burgers;

# Create burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
date timestamp,
PRIMARY KEY (id)
);