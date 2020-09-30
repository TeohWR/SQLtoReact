const express = require("express");
const bodyParser = require("body-parser");

const users_router = require("./router/users");
const cors = require("cors");

//const seller_router = require("./router/seller");

app = express();
app.use(cors());
app.use(bodyParser.json());

//app.use("/customer", customer_router);
app.use("/users", users_router);

module.exports = app;
