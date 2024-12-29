const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./Config/connectDb");

// Config dot env file
dotenv.config();

// Database call
connectDb();

// Initialize express app
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Load routes
require("./routes")(app);

// Serve static files
app.use(express.static(path.join(__dirname, "./client/build")));

// Fallback route
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

// Port
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.cyan.bold)
);
