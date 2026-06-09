const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

console.log("Starting Server...");

mongoose
  .connect("mongodb://127.0.0.1:27017/testdb", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/add", async (req, res) => {
  try {
    const user = new User({
      name: "Dashrath",
      age: 22,
      email: "dash@gmail.com",
    });

    await user.save();

    res.send("User Added Successfully");
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    const data = await user.save();

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const data = await User.find();

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.send("Invalid ID");
    }

    const data = await User.findById(req.params.id);

    if (!data) {
      return res.send("User Not Found");
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/update/:id/:name/:age/:email", async (req, res) => {
  try {
    const { id, name, age, email } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.send("Invalid ID");
    }

    const updated = await User.findByIdAndUpdate(
      id,

      {
        name,
        age,
        email,
      },

      {
        new: true,
      }
    );

    if (!updated) {
      return res.send("User Not Found");
    }

    res.json(updated);
  } catch (err) {
    res.send(err.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.send("Invalid ID");
    }

    const updated = await User.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
      }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.send("Invalid ID");
    }

    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.send("User Not Found");
    }

    res.send("User Deleted");
  } catch (err) {
    res.send(err.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.send("Invalid ID");
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server Running on http://localhost:3000");
});
