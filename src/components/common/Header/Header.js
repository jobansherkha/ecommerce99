// Import required modules and styles
import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  const history = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");

    history("/login");
  };

  // Get the current location using React Router's useLocation hook
  let location = useLocation();

  // Access the 'cart' data from the Redux store using useSelector hook
  const cart = useSelector((state) => state.cart.cart);

  // Function to calculate the total number of items in the cart
  const totalCartItems = () => {
    let total = cart.length;
    return total;
  };

  // Render the Header component
  return (

    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus"> About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                    {!localStorage.getItem("token") ?
                       <div> <NavLink to="/user/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/user/adduser" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink></div>:
                       
                        <NavLink to="/user/login" onClick={Logout} className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Logout</NavLink>
                        
                        }
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i><span class="material-symbols-outlined">shopping_cart</span> ({totalCartItems() || 0}) </NavLink>
                        {!localStorage.getItem("token") ? "":<NavLink  to="/user/myaccount"> <button class="user-icon-button">
    <img src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="User Icon"/>
  </button></NavLink>}

                    </div>
                    
                </div>


            </div>
        </nav>
      
    </>
  );
};
