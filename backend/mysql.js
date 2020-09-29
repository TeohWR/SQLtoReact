const mysql = require("mysql"); // Import mysql package here

// Specify properties for the Mysql connection
parameters = {
  host: "localhost", // address of the server
  user: "root", // username
  password: "root", // replace it with the password that you set using Alter command
  database: "nus_money",
};

// Define a Mysql connection here
connection = mysql.createConnection(parameters);

// Connect to the MySQL server
connection.connect((error) => {
  // If some error occurred while creating the connection, print the error.
  if (error) {
    console.log(error); // prints on the screen
  }
  // else print "connected successfully"
  else {
    console.log("Connection was successful");
  }
});

module.exports = connection;
