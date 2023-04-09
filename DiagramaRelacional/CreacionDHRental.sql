CREATE SCHEMA IF NOT EXISTS `dhrentals`;

CREATE TABLE `dhrentals`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `name` VARCHAR(45) NOT NULL,
  CONSTRAINT PRIMARY KEY(`id`)
  );

CREATE TABLE `dhrentals`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `image` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` DECIMAL NOT NULL,
  `in_sale` VARCHAR(255) NOT NULL,
  `category_id` INT NOT NULL,
   CONSTRAINT PRIMARY KEY(`id`),
    FOREIGN KEY (`category_id`)
    REFERENCES `dhrentals`.`category` (`id`)
    );

CREATE TABLE `dhrentals`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `image` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `cell_phone` DECIMAL NOT NULL,
  `rol` VARCHAR(45) NULL,
  CONSTRAINT PRIMARY KEY(`id`));

CREATE TABLE `dhrentals`.`stock` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `products_id` INT NOT NULL,
  `in_stock` DECIMAL NOT NULL,
  CONSTRAINT PRIMARY KEY(`id`),
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`));

CREATE TABLE `dhrentals`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `quantity` DECIMAL NOT NULL,
  CONSTRAINT PRIMARY KEY(`id`),
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`),
    FOREIGN KEY (`users_id`)
    REFERENCES `dhrentals`.`users` (`id`));

CREATE TABLE `dhrentals`.`shop` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `quantity` DECIMAL NOT NULL,
  `total_price` DECIMAL NOT NULL,
  CONSTRAINT PRIMARY KEY(`id`),
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`),
    FOREIGN KEY (`users_id`)
    REFERENCES `dhrentals`.`users` (`id`));





