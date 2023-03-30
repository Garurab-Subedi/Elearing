const express = require("express");
const mongoose = require("mongoose");
const courses = require("./routes/courses");
const categories = require("./routes/categories");
const students = require("./routes/students");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1/learingPlatfrom")
  .then(() => console.log("Connection is sucessfull"))
  .catch((err) => console.error("Coundnot cconnect to mongodb", err));

app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/students", students);
app.use("/api/courses", courses);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Port is running on ${port}....`));
