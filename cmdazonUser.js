const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "hobgoblin",
  database: "cmdazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  printDB();
});

function printDB() {
    connection.query("SELECT * FROM products",
        function (err, res,) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
              console.log(
              `   Item ID: ${res[i].item_id}
                  Product Name: ${res[i].product_name}
                  Department Name: ${res[i].department_name}
                  Price: ${res[i].price}
                  Quantity: ${res[i].stock_quantity}\n`);
        };
    buy(); 
});
};

function buy() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer.prompt([
      {
      name: "choice",
      type: "input",
      message: "Input the # ID of the item you would like to buy."
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would like to purchase?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
        }
      }
    ])
    .then(function(answer) {
      var chosenItem;
        for (let i = 0; i < res.length; i++) {
          if (res[i].item_id === answer.choice) {
            chosenItem = res[i];
            console.log(chosenItem);
          }
        }
        if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: stock_quantity -= answer.quantity
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log(`Bid placed successfully! There are ${stock_quantity} left of ${chosenItem.product_name}.`);
              buy(); 
            }
          )
        } else {
          console.log("Sorry. We are out of stock. Try again.");
          buy();
        };
      });
    })
    };

  
    
      
    
         
        

