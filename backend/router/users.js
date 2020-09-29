const express = require("express");
const connection = require("../mysql");

router = express.Router();

// define the first get API
router.get("/", (request, response) => {
  connection.query("select * from users", (error, result) => {
    if (error) {
      console.log(error);
      response.send("Some error occurred");
    } else {
      response.send(result);
    }
  });
});

// definer get customer by id API
router.get("/id", (request, response) => {
  // Validate the request parameters
  if (request.body.id == null) {
    response.send("[ERROR] ID is blank");
  } else if (!Number.isInteger(request.body.id)) {
    response.send("[ERROR] Value not allowed");
  } else {
    connection.query(
      `select * from users where user_id = ${request.body.id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("Some error occurred");
        } else {
          response.send(result);
        }
      }
    );
  }
});

router.get("/name", (request, response) => {
  connection.query(
    `select * from users where name = '${request.body.name}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send(result);
      }
    }
  );
});

router.put("/change", (request, response) => {
  connection.query(
    `update users set mobile = '${request.body.newmobile}' where user_id = ${request.body.id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send("Mobile number updated successfully");
      }
    }
  );
});

// define POST API to insert data into users table
router.post("/new_user", (request, response) => {
  connection.query(
    `insert into users (name, email, mobile, NRIC) 
    values ('${request.body.name}','${request.body.email}','${request.body.mobile}','${request.body.NRIC}')`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send("Saved Successfully");
      }
    }
  );
});

router.delete("/delete", (request, response) => {
  if (request.body.id == null) {
    response.send("[ERROR] ID is blank");
  } else if (!Number.isInteger(request.body.id)) {
    response.send("[ERROR] Value not allowed");
  } else {
  connection.query(
    `delete from users where user_id = ${request.body.id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send(`User_id ${request.body.id} have been deleted from the database`);
      }
    }
  );
}});

module.exports = router;
