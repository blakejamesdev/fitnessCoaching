const path = require("path")
const express = require("express")
const morgan = require("morgan")
const favicon = require("serve-favicon")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const methodOverride = require ('method-override')
const userRouter = require("./routes/api/users");
const macrosRouter = require("./routes/api/macros.js");
const workoutRouter = require("./routes/api/workouts.js");
dotenv.config()

const DB = mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });

  const app = express();

//middleware

app.use(morgan("dev"));

app.use(express.json());
 
app.use(cors())
// routes
app.use("/api/users", userRouter);
app.use("/api/macro", macrosRouter);
app.use("/api/workout", workoutRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

const port = 3001;
app.listen(port, () => {
    console.log(`server started on port ${port}. . .`)
})