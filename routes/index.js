// routes/index.js
const userRoutes = require("./userRoutes");
const taskRoutes = require("./taskRoutes");

module.exports = (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/transections", taskRoutes);
};
