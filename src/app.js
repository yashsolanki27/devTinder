const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating a new instance of my User model
  const user = new User({
    firstName: "Yash",
    lastName: "Solanki",
    email: "Yashsol@gmail.com",
    password: "Yash@123",
  });

  try {
    await user.save();
    res.send("User Created Successfully..!!");
  } catch (err) {
    res.Status(400).send("Error saving in User: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7771, () => {
      console.log("Server sucessfully listeining on port 7771");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
    console.error(err.message);
  });
