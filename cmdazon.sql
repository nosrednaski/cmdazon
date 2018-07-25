DROP DATABASE IF EXISTS cmdazon_DB;
CREATE DATABASE cmdazon_DB;

USE cmdazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yo-yo", "Toys", 22.50, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Play-doh", "Toys", 9, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Training wheels", "Toys", 13, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dandy Lion", "Animals", 189, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hare", "Animal", 2, 28973);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cuttlefish", "Animals", 33.33, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lightening bug", "Animals", 0.50, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mercury", "Liquids", 76.01, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Water", "Liquids", 122.22, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Custard", "Liquids", 9, 44);

SELECT * FROM products;
