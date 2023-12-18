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

    const getTotalProducts = ()=> {
        let total = 0
      cart.forEach(item => {
        total += cart.length* item.quantity
      })
      return total
    }

    const totalPrice = getTotalQuantity().toFixed(2)

    

  return (
    <>
    {/* <div>
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
        
      </div>
    </div> */}
    <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {cart.map((item) => {
                      return (
                        <div key={item._id} >
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  // className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={item.quantity > 1 ? ()=>dispatch(decreaseQuantity(item._id)) : ()=> dispatch(removeItem(item._id))} 
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.quantity}</p>

                                <button
                                  className="btn px-3"
                                  onClick={()=>dispatch(increaseQuantity(item._id))}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.quantity}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({getTotalProducts() })<span>${Math.round(totalPrice)}</span>
                      </li>
                      
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(totalPrice)}</strong>
                        </span>
                      </li>
                    </ul>

            
                    <Link to="/user/checkout" className={`btn btn-dark btn-lg btn-block ${cart.length === 0 ? `disabled` : ''} `} > Checkout </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  </>
  )
}
