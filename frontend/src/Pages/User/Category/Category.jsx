import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Category.css";
import Footer from "../../../Components/Footer/Footer";
import { useParams } from "react-router-dom"; 
import { getProductByCategory } from "../../../Services/productApi"; 

function Category() {
  const { id } = useParams(); // Get the category ID from URL params
  const [products, setProducts] = useState([]); // State to store products of the category

  // Fetch products by category ID when component mounts or category ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products by category ID
        const response = await getProductByCategory(id);
        // Set the fetched products in state
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData(); // Call fetchData function when component mounts or category ID changes
  }, [id]); // Depend on category ID to re-fetch products when it changes

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
