const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const userRoutes = require("./routes/v1/user.route")

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to MongoDB at", config.mongoose.url);
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });


app.use('/v1/users', userRoutes)


   // Start the express app
   server = app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
