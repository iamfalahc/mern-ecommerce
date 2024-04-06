import React, { useState } from "react";
import "./CreatePage.css";
import Button from "../../../Components/Button/Button";
import { createProduct } from "../../../Services/productApi";

function CreatePage() {
  const [details, setDetails] = useState({
    name: "",
    image: null, // Initialize image as null to handle file object
    description: "",
    price: "",
    category: "",
  });

  // Function to handle changes in form inputs
  function handleChange(event) {
    const { name, value, type } = event.target;

    // If input type is file, update state with file object
    if (type === "file") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: event.target.files[0], // Store the file object
      }));
    } else {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  }

  // Function to handle form submission
  async function handleCreate(event) {
    event.preventDefault();
    try {
      // Create FormData object to send form data as multipart/form-data
      const formData = new FormData();
      formData.append("name", details.name);
      formData.append("description", details.description);
      formData.append("price", details.price);
      formData.append("category", details.category);
      formData.append("image", details.image); // Append file object to FormData

      // Send POST request to create product with form data
      const response = await createProduct(formData);
      console.log(response);
      if (response.status === 201) {
        // If product is created successfully, show success alert
        alert("Product added successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="create-page">
      <h1>Add product</h1>
      <form action="" className="product-create-fields" onSubmit={handleCreate}>
        {/* Input field for product name */}
        <div className="input-container product-name-field">
          <label htmlFor="productName">Product name:</label>
          <input
            type="text"
            id="productName"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
        </div>
        {/* Input field for product image */}
        <div className="input-container product-image-field">
          <label htmlFor="productImage">Product image:</label>
          <input
            type="file"
            id="productImage"
            name="image"
            onChange={handleChange} // Handle file selection
          />
        </div>
        {/* Input field for product description */}
        <div className="input-container product-description-field">
          <label htmlFor="productDescription">Product description:</label>
          <input
            type="text"
            id="productDescription"
            name="description"
            value={details.description}
            onChange={handleChange}
          />
        </div>
        {/* Input field for product price */}
        <div className="input-container product-price-field">
          <label htmlFor="productPrice">Product price:</label>
          <input
            type="text"
            id="productPrice"
            name="price"
            value={details.price}
            onChange={handleChange}
          />
        </div>
        {/* Input field for product category */}
        <div className="input-container product-category-field">
          <label htmlFor="productCategory">Product category:</label>
          <input
            type="text"
            id="productCategory"
            name="category"
            value={details.category}
            onChange={handleChange}
          />
        </div>
        <Button buttonName={"Add"} variant={"primary"} />
      </form>
    </div>
  );
}

export default CreatePage;
