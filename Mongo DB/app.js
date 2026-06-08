const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  department: String,
  email: String,
});

const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
  res.send("Student Management API Running");
});

app.get("/add", async (req, res) => {
  try {
    const student = new Student({
      name: "Swayam",
      age: 19,
      department: "AI & DS",
      email: "swayam@gmail.com",
    });

    await student.save();

    res.send("Student Added Successfully");
  } catch (err) {
    res.send(err.message);
  }
});

app.get("/students", async (req, res) => {
  const data = await Student.find();

  res.json(data);
});

app.get("/update/:id/:name/:age/:department/:email", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,

    {
      name: req.params.name,
      age: req.params.age,
      department: req.params.department,
      email: req.params.email,
    },

    {
      new: true,
    }
  );

  res.json(updated);
});

app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);

  res.send("Student Deleted Successfully");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
