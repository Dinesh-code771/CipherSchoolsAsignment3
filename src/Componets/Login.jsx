import React, { useState } from "react";
import "C:/Users/akepa/recipie-cipher/src/Login.css"
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Register from './Register';
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({userName:"",password:""});
  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    let original = { ...errors };
    let dummyObj = { ...errors };
    dummyObj.userName = validate(userName,"userName");
    dummyObj.password = validate(password,"password");
    if (Object.keys(dummyObj).length > 0) {
      setErrors(dummyObj);
    } else {
      setErrors(original);
    }
  };
  const validate = (data,value) => {
    if (data.trim().length === 0) {
      return `${value} cannot be empty`;
    } 
    else if(userName!=="" && password!==""){
      navigate("/DisplayRecipies")
    }
    else {
      return "";
    }
  
  };
  return (
    <div className="cont">
      
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter-email"
          />
         { errors.userName && <div className="alert alert-danger" >{errors.userName}</div>}
            
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
         {errors.password && <div className="alert alert-danger" role="alert">
            {errors.password}
          </div>}
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
        <Link to="/Register">
        {" "}
        <button className="btn btn-danger">Register</button>
      </Link>
      </form>
    </div>
  );
};

export default Login;
