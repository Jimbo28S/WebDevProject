require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const prisma = require("./prismaClient");  // Prisma client import
const bodyParser = require("body-parser");



const app = express();
app.use(cors());
app.use(express.json());  // Built-in middleware for JSON parsing

// Prisma client setup (database interaction)
const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();


// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please provide both email and password" });
  }

  try {
    // Find the user in MongoDB (or Prisma-managed DB)
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(400).json({ error: "User not found" });

    // Compare password with the hashed password in the DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate a JWT token and send it in the response
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register Route
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const permissions = "user";

    // Log the request body to see what is coming from the frontend
    console.log("Received data:", req.body);

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all fields." });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
      email,
      password: hashedPassword,
      permissions,
      },
    });

    res.json({ message: "User registered successfully" });
});


app.listen(5000, () => console.log("Server running on port 5000"));
