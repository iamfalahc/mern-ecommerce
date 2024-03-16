import React, { useState } from 'react'
import "./EditProduct.css"
import Button from '../../../Components/Button/Button';
function EditProduct() {
 const [details, setDetails] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category:""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  }
  
 function handleEdit() {
    console.log(details)
 }
  return (
    <div className="create-page">
      <form action="" className="product-create-fields">
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
            id="image"
            name="productImage"
            value={details.image}
            onChange={handleChange}
          />
        </div>
        <div className="input-container product-description-field">
          <label htmlFor="productDescription">Product description:</label>
          <input
            type="text"
            id="description"
            name="productDescription"
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
      </form>
      <Button
        buttonName={"Edit product"}
        variant={"primary"}
        onCreate={handleEdit}
        
      />
    </div>
  );
}

export default EditProduct
