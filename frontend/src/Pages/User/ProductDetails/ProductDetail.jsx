import React, { useEffect } from "react"; 
import "./ProductDetail.css";
import { useSearchParams } from "react-router-dom";
import { products } from "../../../DummyDatas/DummyDatas";
import Button from "../../../Components/Button/Button";
import Navbar from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Footer from "../../../Components/Footer/Footer";

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id)
  const product = products[0];

  return (
    <>
      <Navbar />
      <main className="product-details">
      <section className="details-page-container">
        <div className="product-details-img-wrapper ">
          {" "}
          <img className="product-details-img" src={product.img} alt="" />
        </div>
        <div className="right-wrapper">
          <h4 className="product-details-name">{product.name}</h4>
          <span>{product.description}</span>
          <h4 product-details-price>
            {/* <span>&#x20B9;</span> */}
            {product.price}
          </h4>
          <span product-details-category>{product.category}</span>
          <div className="button-container">
            <Button buttonName="Add to cart" variant={"primary"} />
            <Button buttonName="Add to wishlist" variant={"secondary"} />
          </div>
        </div>
      </section>
      <section className="category-wrapper">
        <h4>Similiar products</h4>
      <div className="products-container">
        {products.map((product)=>{
          return <ProductCard
          product={product}
          key={product.id}/>
        })}
      </div>
      </section>
      </main>
      <Footer/>
    </>
  );
}

export default ProductDetail;
