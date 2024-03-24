import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { listProduct } from "../../../Services/productApi";

function AdminHome() {
  const [products, setProducts] = useState([]);
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
  return (
    <main className="admin-home">
      <section className="admin-home-top">
        <Link to={"/admin-create-page"}>
          <Button buttonName="Add product" variant={"primary"} />
        </Link>
        <h4>Admin home</h4>
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
                    <td>
                      {
                        <Link to={`/admin-edit-page/${product._id}`}>
                          <Button
                            buttonName="Edit product"
                            variant={"primary"}
                          />
                        </Link>
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
