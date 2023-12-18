import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';



export const Login = (props) => {
  let history = useNavigate();

  const [lstate, setlstate] = useState({
    email: "",
    password: "",
  });

  
//   making a onChange function 

const onChange = (e) => {
  setlstate({ ...lstate, [e.target.name]: e.target.value });
};

//   calling api using fetch method
const login = async (email, password) => {
  const response = await fetch("https://backend1-hpb2.onrender.com/user/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  console.log(json);
  if ( json.success){
    if(json.user.role === "admin"){
        props.showAlert("success", "your are successfully logged in ")
        localStorage.setItem("token", json.authtoken)
        localStorage.setItem("user", JSON.stringify(json.user))
        history("/admin/dashboard")
    }
    else{
        props.showAlert("success", "your are successfully logged in ")
    localStorage.setItem("token", json.authtoken)
    localStorage.setItem("user", JSON.stringify(json.user))
    history("/")
    }
     

  }
  else{
    props.showAlert("danger", json.error)
    
  }
 
    
  };
  const handleClick = (e) => {
    e.preventDefault();
    
    login(lstate.email, lstate.password);
    setlstate({ email: "", password: "" });
};
  return (
    <>
    <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleClick}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                class="form-control"
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={lstate.email}
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  class="form-control"
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  value={lstate.password}
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/user/adduser" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    {/* <form onSubmit={handleClick}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            value={lstate.email}
            className="form-control"
            required
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={lstate.password}
            className="form-control"
            minLength={8}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          
          className="btn  btn-outline-light btn-warning btn-block mb-4"
        >
          Sign in
        </button>
      </form> */}
    </>
  )
}
