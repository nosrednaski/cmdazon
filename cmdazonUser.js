var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
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
            console.log(res);
        }
    )
        

};

// con.connect(function(err) {
//     if (err) throw err;
//     //Select all customers and return the result object:
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
  