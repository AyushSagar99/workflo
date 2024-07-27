const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { User } = require("./mongo");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const secret_key = "SECR3T"; // Ensure this is the same everywhere

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secret_key, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      return res.status(409).json({ message: "User already exists" });
    } else {
      const newUser = await User.create({ name, email, password });
      const token = jwt.sign({ userId: newUser._id, email: newUser.email }, secret_key, { expiresIn: '1h' });
      return res.status(201).json({ message: "Signed In", name, token });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(409).json({ message: "User not exist" });
    } else {
      // Assuming password check is successful (you should add password hashing and checking)
      const token = jwt.sign({ userId: user._id, email: user.email }, secret_key, { expiresIn: '1h' });
      return res.status(201).json({ message: "Loged In", token });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/dashboard", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Welcome to the dashboard!" });
  });

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
