const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 4000;
const connectDB = require("./Config/dbConnection");
const Product = require("./Models/productModel");
const User = require("./Models/userModel");
const mongoose = require("mongoose");
const bcrypt = require ("bcrypt")

//DATABASE CONNECTION

connectDB();
app.use(bodyParser.json());
app.use(cors());


//PRODUCT

app.get("/product", (req, res) => {
  res.json("all products");
});


//CREATE PRODUCT

app.post("/api/admin/product", async (req, res) => {
  console.log(req.body);
  const payload = req.body;
  try {
    const product = new Product({
      name: payload.name,
      category: payload.category,
      price: payload.price,
      description: payload.description,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
  // res.json({ Response: "successfully recieved" });
});


//GET SINGLE PRODUCT

app.get("/api/product/:id", async (req, res) => {
  try {
    // Find the product by ID
    console.log(req.params.id);
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }
    const product = await Product.findOne({
      _id: new mongoose.Types.ObjectId(req.params.id),
    });
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // If product found, return it
    res.json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//get all products

app.get("/api/products", async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find({});
    // Return the products as a JSON response
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Route to retrieve products by category
app.get('/api/products/:category', async (req, res) => {
  const category = req.params.category;
  try {
      const products = await Product.find({ category });
      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

//EDIT PRODUCT

app.put("/api/admin/product/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  try {
    // Find the product by ID and update it with the new data
    const product = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );
    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Return the updated product as a JSON response
    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//DELETE PRODUCT

app.delete("/api/admin/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID and remove it from the database
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // Check if the product exists
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the deleted product as a JSON response
    res.status(200).json({ message: "successfully deleted", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//SIGN UP

app.post("/api/signup", async (req, res) => {
  const userData = req.body;
  try {
    // Check if the user already exists in the database (you may need to modify this check based on your user schema)
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user using the user data provided in the request body
    const newUser = new User(userData);
    await newUser.save();
    // Optionally, you may want to generate a token for the newly registered user and send it back in the response
    // Return a success message or any additional data as a JSON response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//LOGIN

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });

    console.log(user); // If user not found, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Optionally, you may want to generate a token for the authenticated user and send it back in the response
    // Return any additional data or success message as a JSON response
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//ADMIN LOGIN

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "#a12345678") {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid email or password" });
});


// START THE SERVER

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
