import React from "react";
import "./AdminHome.css";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <main className="admin-home">
      <section className="admin-home-top">
        <Link to={"/admin-create-page"}>
          <Button buttonName="Add product" variant={"primary"} />
        </Link>
        <h4>Admin home</h4>
        <Link to={"/admin-edit-page"}>
          <Button buttonName="Edit product" variant={"primary"} />
        </Link>
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
          <tr>
            <td>1</td>
            <td>Men Formal</td>
            <td>Men</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Woman Formal</td>
            <td>Woman</td>
            <td>1000</td>
          </tr>
        </table>
      </section>
    </main>
  );
}

export default AdminHome;
