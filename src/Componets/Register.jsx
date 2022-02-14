import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayRecipies from "./DisplayRecipies";
const Register = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErros] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (propName) => {
    let clone = { ...details };
    clone[propName.target.name] = propName.target.value;
    setDetails(clone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let original = { ...errors };
    let dummyError = { ...errors };
    //console.log(dummyError.firstName)
    dummyError.firstName = validate(details.firstName, "firstName");
    console.log(validate(details.firstName, "firstName"));

    dummyError.email = validate(details.email, "email");
    dummyError.password = validate(details.password, "password");
    dummyError.confirmPassword = validate(
      details.confirmPassword,
      "confirm-password"
    );
    if (Object.keys(dummyError).length > 0) {
      setErros(dummyError);
    } else {
      setErros(original);
    }
  };
  const validate = (value, propName) => {
    if (value.trim().length === 0) {
      return `${propName} can't be empty`;
    } else if (value == "currentPassword") {
      if (value != details.password) {
        return "Password Not Matching";
      }
    } else if (
      details.firstName !== "" &&
      details.email != null &&
      details.password !== "" &&
      details.confirmPassword !== ""
    ) {
      navigate("/DisplayRecipies");
    } else {
      
      return "";
    }
  };
  return (
    <div className="backimg">
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First-Name</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={details.name}
            type="text"
            name="firstName"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter-FirstName"
          />
          {errors.firstName && (
            <div className="alert alert-danger">{errors.firstName}</div>
          )}

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={details.email}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Email"
          />
          {errors.email && (
            <div className="alert alert-danger" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={details.password}
            type="text"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="password"
          />
          {errors.confirmPassword && (
            <div className="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm-Password</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              value={details.confirmPassword}
              type="text"
              name="confirmPassword"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm-password"
            />
            {errors.confirmPassword && (
              <div className="alert alert-danger" role="alert">
                {errors.confirmPassword}
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-success"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
