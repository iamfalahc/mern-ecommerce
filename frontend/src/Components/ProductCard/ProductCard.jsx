import React from "react";
import "./ProductCard.css";
import { createSearchParams, useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const handleClick=(event)=>{
        navigate({
            pathname: "/product-detail",
            search: createSearchParams({
                id: product.id
            }).toString()
        });
        console.log("clicked")
    }
  return (
    <div onClick={handleClick} className="product-card">
      <img className="product-image" src={product.img} alt="" />
      <h5 className="product-name">{product.name}</h5>
      <span className="product-price">{product.price}</span>
    </div>
  );
}
export default ProductCard;
