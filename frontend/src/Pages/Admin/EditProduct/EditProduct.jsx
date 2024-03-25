import React, { useEffect, useState } from 'react'
import "./EditProduct.css"
import Button from '../../../Components/Button/Button';
import { useParams } from 'react-router-dom';
import { editProduct, getSingleProduct } from '../../../Services/productApi';
function EditProduct() {
  const [product,setProduct] = useState({})
 const [details, setDetails] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category:""
  });
  const { id } = useParams();
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getSingleProduct(id);
        // setProduct(response.data);
        setDetails(response.data);
        
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [id]);
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  }
  
  async function handleEdit(event) {
    event.preventDefault()
    try {
      const response = await editProduct(id, details)
      console.log(response)
      if(response.status === 200) {
        alert("product edited successfully")
       
      }

    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className="create-page">
      <form action="" className="product-create-fields" onSubmit={handleEdit} >
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
        <Button
        buttonName={"Edit product"}
        variant={"primary"}
      />
      </form>

    </div>
  );
}

export default EditProduct
