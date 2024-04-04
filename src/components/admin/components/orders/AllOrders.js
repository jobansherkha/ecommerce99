import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Orders.css'
import { fetchAllOrders } from "../../../user/Reducers/OrderSlice";

export const AllOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);
  const orders = useSelector((state) => state.order.orders);
  console.log(orders);
  return (
    <>
    
      
            <div className="container">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            
            <th>Customer</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              
              <td>{order.user.name}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <ul>
                  {order.orderItems.map((orderItems) => (
                    <li key={orderItems.product._id}>
                      <img
                        src={orderItems.product.image} // Assuming product has an 'image' field
                        alt={orderItems.product.name} // Assuming product has a 'name' field
                        style={{ maxWidth: '50px', maxHeight: '50px' }}
                      />
                      {orderItems.product.name} - Quantity: {orderItems.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
         
        );
      
    </>
  );
};
