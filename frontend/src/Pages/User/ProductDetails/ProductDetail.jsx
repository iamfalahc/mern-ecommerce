import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  getProductByCategory,
} from "../../../Services/productApi";
import Button from "../../../Components/Button/Button";
import Navbar from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Footer from "../../../Components/Footer/Footer";

function ProductDetail() {
  // Get product ID from URL parameters
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);

  // Effect to fetch and set the product details based on the product ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]); // Trigger effect when the product ID changes

  // Effect to fetch and set similar products based on the category of the main product
  useEffect(() => {
    const fetchSimilarProduct = async () => {
      try {
        const response = await getProductByCategory(product.category);
        setSimilarProduct(response.data);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    };

    // Check if product category is available before fetching similar products
    if (product.category) {
      fetchSimilarProduct();
    }
  }, [product.category]); // Trigger effect when the category of the main product changes

  return (
    <>
      <Navbar />
      <main className="product-details">
        <section className="details-page-container">
          {/* Product details section */}
          <div className="product-details-img-wrapper ">
            <img
              className="product-details-img"
              src={`http://localhost:4000/Images/${product.image}`}
              alt=""
            />
          </div>
          <div className="right-wrapper">
            <h4 className="product-details-name">{product.name}</h4>
            <span>{product.description}</span>
            <h4 className="product-details-price">{product.price}</h4>
            <span className="product-details-category">{product.category}</span>
            {/* Button for wish list and add to cart */}
            <div className="button-container">
              <Button buttonName="Add to cart" variant={"primary"} />
              <Button buttonName="Add to wishlist" variant={"secondary"} />
            </div>
          </div>
        </section>
        {/* Section for similar products */}
        <section className="category-wrapper">
          <h4>Similar products</h4>
          <div className="products-container">
            {/* Render similar products */}
            {similarProduct.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductDetail;
