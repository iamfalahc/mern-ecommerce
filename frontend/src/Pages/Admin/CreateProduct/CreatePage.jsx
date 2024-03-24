import React from "react";
import "./CreatePage.css";
import Button from "../../../Components/Button/Button";
import { useState } from "react";
import { createProduct } from "../../../Services/productApi";

function CreatePage() {
  const [details, setDetails] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

 async function handleCreate(event) {
    event.preventDefault()
    try {
      const response = await createProduct(details)
      console.log(response)
      if(response.status === 201) {
        alert("product added successfully")
       
      }

    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className="create-page">
      <h1>Add product</h1>
      <form action="" className="product-create-fields" onSubmit={handleCreate}>
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
        <div className="input-container product-image-field">
          <label htmlFor="productImage">Product image:</label>
          <input
            type="file"
            id="productImage"
            name="image"
            value={details.image}
            onChange={handleChange}
          />
        </div>
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
        <Button buttonName={"Add"} variant={"primary"} 
      />
      </form>
     
    </div>
  );
}

export default CreatePage;
