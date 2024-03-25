import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { deleteProduct, listProduct } from "../../../Services/productApi";

function AdminHome() {
  const [products, setProducts] = useState([]);

  function adminLogOut() {
    localStorage.setItem("isAuthenticatedAdmin",false)
    window.location.reload()
  }

  useEffect(() => {
    getAllProductList();
  }, []);

  async function getAllProductList() {
    try {
      const response = await listProduct();
      console.log(response);
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await deleteProduct(id);
      console.log(response);
      if (response.status === 200) {
       alert("product deleted")
       window.location.reload()      
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <main className="admin-home">
      <section className="admin-home-top">
        <Link to={"/admin-create-page"}>
          <Button buttonName="Add product" variant={"primary"} />
        </Link>
        <h4>Admin home</h4>
        <Button buttonName="Log Out" variant={"primary"} onCreate={adminLogOut} />
      </section>
      <section className="table-wrapper">
        <table>
          <tr>
            <th className="number-row">No</th>
            <th>Product name</th>
            <th>Product category</th>
            <th>Product price</th>
            <th>Actions</th>
          </tr>
          {products.length > 0
            ? products.map((product, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td className="button-td">
                      {
                        <Link to={`/admin-edit-page/${product._id}`}>
                          <Button buttonName="Edit" variant={"primary"} />
                        </Link>
                      }
                      {<Button buttonName="Delete" variant={"tertiary"} onCreate={() => handleDelete(product._id)}  />}
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
