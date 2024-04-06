import React, { useEffect, useState } from "react";
import "./EditProduct.css";
import Button from "../../../Components/Button/Button";
import { useParams } from "react-router-dom";
import { editProduct, getSingleProduct } from "../../../Services/productApi";

function EditProduct() {
  // State to store product details and edited values
  const [details, setDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  // Extracting id from URL params
  const { id } = useParams();

  // Fetch product details based on id when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleProduct(id);
        setDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    // Update the corresponding field in the details state
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  // Function to handle editing of the product
  async function handleEdit(event) {
    event.preventDefault();
    try {
      // Send edited product details to the server for updating
      const response = await editProduct(id, details);
      console.log(response);
      if (response.status === 200) {
        // Show success message if editing is successful
        alert("Product edited successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="create-page">
      <form action="" className="product-create-fields" onSubmit={handleEdit}>
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
        <Button buttonName={"Edit product"} variant={"primary"} />
      </form>
    </div>
  );
}

export default EditProduct;
