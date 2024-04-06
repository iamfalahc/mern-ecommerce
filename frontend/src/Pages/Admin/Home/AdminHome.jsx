import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { deleteProduct, listProduct } from "../../../Services/productApi";

function AdminHome() {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Function to log out the admin user
  function adminLogOut() {
    localStorage.setItem("isAuthenticatedAdmin", false); // Set authentication flag to false
    window.location.reload(); // Reload the page to reflect the logout
  }

  // Fetch all products when the component mounts
  useEffect(() => {
    getAllProductList();
  }, []);

  // Function to fetch all products from the server
  async function getAllProductList() {
    try {
      const response = await listProduct(); // Retrieve all products
      console.log(response);
      if (response.status === 200) {
        setProducts(response.data); // Set the retrieved products in state
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  // Function to handle deletion of a product
  async function handleDelete(id) {
    try {
      const response = await deleteProduct(id); // Delete the product by ID
      console.log(response);
      if (response.status === 200) {
        alert("product deleted"); // Show success message on successful deletion
        window.location.reload(); // Reload the page to reflect the updated product list
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  // Render the AdminHome component
  return (
    <main className="admin-home">
      {/* Admin dashboard header */}
      <section className="admin-home-top">
        {/* Button to add a new product */}
        <Link to={"/admin-create-page"}>
          <Button buttonName="Add product" variant={"primary"} />
        </Link>
        <h4>Admin home</h4>
        {/* Button to log out the admin user */}
        <Button
          buttonName="Log Out"
          variant={"secondary"}
          onCreate={adminLogOut}
        />
      </section>
      {/* Product table */}
      <section className="table-wrapper">
        <table>
          <tr>
            <th className="number-row">No</th>
            <th>Product name</th>
            <th>Product category</th>
            <th>Product price</th>
            <th>Actions</th>
          </tr>
          {/* Map through the products and display them in the table */}
          {products.length > 0
            ? products.map((product, index) => {
                return (
                  <tr key={product._id}> {/* Use product ID as the key */}
                    <td>{index + 1}</td> {/* Display product number */}
                    <td>{product.name}</td> {/* Display product name */}
                    <td>{product.category}</td> {/* Display product category */}
                    <td>{product.price}</td> {/* Display product price */}
                    <td className="button-td">
                      {/* Button to edit the product */}
                      {
                        <Link to={`/admin-edit-page/${product._id}`}>
                          <Button buttonName="Edit" variant={"primary"} />
                        </Link>
                      }
                      {/* Button to delete the product */}
                      {
                        <Button
                          buttonName="Delete"
                          variant={"tertiary"}
                          onCreate={() => handleDelete(product._id)}
                        />
                      }
                    </td>
                  </tr>
                );
              })
            : ""}
        </table>
      </section>
    </main>
  );
}

export default AdminHome;
