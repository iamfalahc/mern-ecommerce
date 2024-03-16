import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
// import { products } from "../../../DummyDatas/DummyDatas";
import "./Category.css";
import Footer from "../../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../../Services/productApi";

function Category() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await getProductByCategory(id);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="category-wise-page-container">
      <Navbar />
      <main>
        <div className="products-container">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Category;
