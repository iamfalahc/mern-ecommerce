import React, { useEffect,useState } from "react"; 
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { products } from "../../../DummyDatas/DummyDatas";
import Button from "../../../Components/Button/Button";
import Navbar from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Footer from "../../../Components/Footer/Footer";
import { getProductByCategory, getSingleProduct } from "../../../Services/productApi";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getSingleProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [id]);
  useEffect( () => {
    const fetchSimilarProduct = async () => {
      try {
        const response = await getProductByCategory(product.category);
        setSimilarProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchSimilarProduct();
  }, [product.category]);
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
        {similarProduct.map((product)=>{
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
