import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css"
import { decreaseQuantity, increaseQuantity, removeItem } from '../Reducers/CartSlice';
import { Link } from 'react-router-dom';

export const Cart = () => {
 
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    
    const increase =(cart)=>{
    dispatch(increaseQuantity(cart))
    };
    const getTotalQuantity = () => {
      let total = 0
      cart.forEach(item => {
        total += item.price* item.quantity
      })
      return total
    }

    const totalPrice = getTotalQuantity().toFixed(2)

    

  return (
    <>
    <div>
      {" "}
      <div class="cart-container">
        <h1 class="cart-title">Your Cart</h1>
        <ul class="cart-items">
          {cart.map((cart) => (
            <li class="cart-item">
              <img
                class="cart-item-image"
                src={cart.image}
                alt="Product 1"
              />
              <div class="cart-item-details">
                <h2 class="cart-item-title">{cart.title}</h2>
                <p class="cart-item-price">${cart.price}</p>
                <p class="cart-item-quantity">{cart.quantity}</p>
              </div>
              <div class="cart-item-buttons">
        <button class="cart-item-button"onClick={()=>dispatch(decreaseQuantity(cart._id))} >-</button>
        <button class="cart-item-button" onClick={()=>dispatch(increaseQuantity(cart._id))}>+</button>
        <button class="cart-item-button"onClick={()=>dispatch(removeItem(cart._id))}>Remove</button>
      </div>
            </li>
          ))}
        </ul>
        <p class="cart-total">Total: ${ totalPrice|| 0}</p>
        <Link to="/user/checkout" >  <button class="checkout-button">Checkout</button> </Link>
      </div>
    </div>
  </>
  )
}
