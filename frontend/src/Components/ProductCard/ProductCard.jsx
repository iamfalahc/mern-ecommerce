import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.img} alt="" />
      <h5 className="product-name">{product.name}</h5>
      <span className="product-price">{product.price}</span>
    </div>
  );
}
export default ProductCard;
