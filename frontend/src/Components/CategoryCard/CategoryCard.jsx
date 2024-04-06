import React from "react";
import "./CategoryCard.css";
import { createSearchParams, useNavigate } from "react-router-dom";

function CategoryCard({ categoryItem }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate({
      pathname: "/category/" + categoryItem.id,
    });

    console.log("category clicked");
  };
  return (
    <main className="category-card-wrapper" onClick={handleClick}>
      <section className="category-card">
        {" "}
        <img className="category-img" src={categoryItem.img} alt="" />
        <span className="category-name">{categoryItem.title}</span>
      </section>
    </main>
  );
}

export default CategoryCard;
