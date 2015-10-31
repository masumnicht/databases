-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageId int AUTO_INCREMENT PRIMARY KEY,
  text varchar(140),
  userId int,
  roomId int
  /* Describe your table here.*/
);

CREATE TABLE users (
  userId int AUTO_INCREMENT PRIMARY KEY,
  userName varchar(30)
);

CREATE TABLE rooms (
  roomId int AUTO_INCREMENT PRIMARY KEY,
  roomName varchar(30)
);

CREATE TABLE users_rooms (
  urId int AUTO_INCREMENT PRIMARY KEY,
  userId int,
  roomId int
);
/* Create other tables and define schemas for them here! */


DESCRIBE users;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

