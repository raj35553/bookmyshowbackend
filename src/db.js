const mysql = require("mysql2");

// Create DB Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
    return;
  }
  console.log("Connected to database successfully!");
});

module.exports = db;
