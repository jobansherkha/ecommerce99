import React from "react";


import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = (props) => {
  let history = useNavigate();
  //   setting up the state 
  const [signupdata, setsignupdata] = useState({
    name : "",
    email: "",
    password: "",
    cpassword:""
  });

//   making a onChange function 

  const onChange = (e) => {
    setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

//   calling api using fetch method
  const signup = async (name, email, password) => {
    const response = await fetch('https://backend1-hpb2.onrender.com/user/adduser', {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);
   
    if(json.success){
      history("/user/login")
      props.showAlert("success", "sign up successfull, now please login to continue ")
      console.log(props.alert)
    }
    else{
      props.showAlert("danger", json.error)

    }
  
    
  };

//   making a handleClick function 

  const handleClick = (e) => {
    e.preventDefault();
    
    if(signupdata.password === signupdata.cpassword){
      signup(signupdata.name, signupdata.email, signupdata.password);

    }
    else{
      props.showAlert("danger", "your password doesnot match")

    }
    setsignupdata({name : "", email: "", password: "", cpassword:""});
    
  };
  return (
    <div>
        <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleClick}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name = "name"
                                    value = {signupdata.name}
                                    onChange = {onChange}
                                    minLength={3}
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name = "email"
                                    value = {signupdata.email}
                                    onChange = {onChange}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    name = "password"
                                    value = {signupdata.password}
                                    onChange = {onChange}
                                    required
                                    minLength={8}
                                    placeholder="Password"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">confirm Password</label>
                                <input
                                    type="password"
                                    id="cpassword"
                                    
                                    value = {signupdata.cpassword}
                                    className="form-control"
                                    name = "cpassword"
                                    onChange = {onChange}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/user/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
   
      {/* <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form onSubmit={handleClick} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              name = "name"
                              value = {signupdata.name}
                              onChange = {onChange}
                              minLength={3}
                              required
                            
                             
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              name = "email"
                              value = {signupdata.email}
                              onChange = {onChange}
                              

                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              name = "password"
                              value = {signupdata.password}
                              onChange = {onChange}
                              required
                              minLength={8}
                              
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="cpassword"
                              
                              value = {signupdata.cpassword}
                              className="form-control"
                              name = "cpassword"
                              onChange = {onChange}
                              
                              
                              
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
