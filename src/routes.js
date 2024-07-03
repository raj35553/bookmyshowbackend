const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require("./db");

// welcome api
router.get("/", (req, res) => {
  return res.send("Welcome");
});

// Register/Signup api
// router.post("/api/register", async (req, res) => {
//   const { Name, Description, Age } = req.query;

//   const salt = await bcrypt.genSaltSync(10); // Key
//   const hashPassword = await bcrypt.hashSync(password, salt);

//   const sqlQuery = `INSERT INTO users (Name, Description, Age) VALUES (?, ?, ?, ?)`;
//   db.query(
//     sqlQuery,
//     [name, email, phone, hashPassword],
//     function (error, results) {
//       if (error) {
//         return res.status(500).send(error);
//       }

//       if (results) {
//         const respose = {
//           message: "Your account has been register successfully!",
//           status: true,
//         };

//         return res.json(respose);
//       }
//     }
//   );
// });

// Get all blogs
router.get("/blogs", (req, res) => {
  //   const { name } = req.query;
  // db.query("DELETE FROM `employees_data` where Name='RajKumar'", (error, results) => {
    db.query("Select * FROM `employees_data`", (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.json(results);
  });
});

// Add blog
// router.post("/blogs/add", (req, res) => {
//   const { title, description } = req.query;

//   const sqlQuery = `INSERT INTO employees_data (Name, Description) VALUES (?,?)`;
//   db.query(sqlQuery, [title, description], (error, results) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     if (results) {
//       const respose = {
//         message: "Blog added successfully!",
//         status: true,
//       };
//       return res.json(respose);
//     }
//   });
// });

module.exports = router;
