import React from "react";
import "./ProductCard.css";
import { createSearchParams, useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate({
            pathname: "/product-detail/"+product._id,
        });
    }
  return (
    <div onClick={handleClick} className="product-card">
     <img className="product-image" src={`http://localhost:4000/Images/${product.image}`} alt="" />

      <h5 className="product-name">{product.name}</h5>
      <span className="product-price">{product.price}</span>
    </div>
  );
}
export default ProductCard;
