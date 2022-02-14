import React, { Component } from "react";
import { useState } from "react/cjs/react.development";
import { getRecipies } from "./RecipieDetails";
import { useNavigate } from "react-router-dom";
import "C:/Users/akepa/recipie-cipher/src/Login.css";
import AddProduct from "./AddRecipie";
let id = 0;
var today = new Date();
const AddRecipie = () => {
  const [addproducts, setAddProducts] = useState({
    id: "",
    recipieName: "",
    body: "",
    postDate: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    cost: "",
  });

  let handleChange = (e) => {
    let newobj = { ...addproducts };
    newobj[e.target.name] = e.target.value;
    setAddProducts(newobj);
  };
  /*let defaultError = {
    id: id++,
    name: "",
    cost: "",
    gst: 0,
    discount: 0,
  }; */
  let handleSubmit = (e) => {
    e.preventDefault();
    let valueObj = {
      id: id++,
      name: "",
      body: "",
      currentDate:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    };
    if (addproducts.recipieName === "" || addproducts.body==="") {
      alert("OPPS!!! ALL filed are mandatary");
      return;
    }
    valueObj.name = addproducts.recipieName;
    valueObj.body = addproducts.body;
    getRecipies().push(valueObj);
    console.log(getRecipies());
    navigate("/DisplayRecipies");
  };
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter Title-of-Recipie</label>
        <input
          onChange={(e) => handleChange(e)}
          value={addproducts.recipieName}
          type="text"
          className="form-control"
          name="recipieName"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Recipie-titile"
        />
        {error.name && <div className="alert alert-danger">{error.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Ingredents and Steps</label>
       
        <textarea
          onChange={(e) => handleChange(e)}
          value={addproducts.body}
          type="text"
          className="form-control"
          name="body"
          id="exampleInputPassword1"
          placeholder="Ingredents"
        />
        {error.cost && <div className="alert alert-danger">{error.cost}</div>}
      </div>

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddRecipie;
