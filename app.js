const express = require("express"); // Freamwork
const bodyParser = require("body-parser"); // Middleware
const app = express();

const router = require("./src/routes");

app.use(bodyParser.json());

// API Routes or Endpoint
app.use("/", router);

const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
