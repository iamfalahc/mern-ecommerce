
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
const multer = require("multer")
const path = require("path");
 
// MULTER CONFIGURATION FOR FILE UPLOADS
const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
      cb(null,"public/Images")
  },
  filename:(req,file,cb)=>{
      cb(null,file.fieldname+ "_"+Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });

// CONNECT TO DATABASE
connectDB();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"))

// ROUTE TO FETCH ALL PRODUCTS
app.get("/product", (req, res) => {
  res.json("all products");
});

// CREATE A NEW PRODUCT
app.post("/api/admin/product", upload.single('image'), async (req, res) => {
  // Log the form data and uploaded file information
  console.log(req.body);
  console.log(req.file);

  // Extract product data from request body
  const payload = req.body;
  try {
    // Create a new product instance
    const product = new Product({
      name: payload.name,
      category: payload.category,
      price: payload.price,
      description: payload.description,
      image: req.file.filename // Store the filename in the database
    });
    // Save the product to the database
    await product.save();
    // Return the newly created product as JSON response
    res.status(201).json(product);
  } catch (error) {
    // Handle server error if any
    res.status(500).json({ message: "server error" });
  }
});

// FETCH A SINGLE PRODUCT BY ID
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
    
    // If product found, return it as JSON response
    res.json(product);
  } catch (error) {
    // Handle server error if any
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// FETCH ALL PRODUCTS
app.get("/api/products", async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find({});
    // Return the products as a JSON response
    res.json(products);
  } catch (error) {
    // Handle server error if any
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// FETCH PRODUCTS BY CATEGORY
app.get('/api/products/:category', async (req, res) => {
  const category = req.params.category;
  try {
      // Find products by category
      const products = await Product.find({ category });
      // Return products as a JSON response
      res.json(products);
  } catch (error) {
      // Handle server error if any
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// UPDATE A PRODUCT BY ID
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
    // Handle server error if any
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE A PRODUCT BY ID
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
    // Handle server error if any
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// USER SIGN UP
app.post("/api/signup", async (req, res) => {
  const userData = req.body;
  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user using the provided user data
    const newUser = new User(userData);
    await newUser.save();
    // Return success message if user is created successfully
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle server error if any
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// USER LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Return success message if login is successful
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    // Handle server error if any
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ADMIN LOGIN
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
