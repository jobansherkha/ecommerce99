import axios from "axios";
import React, { useEffect, useState } from "react";

export const CheckOut = (props) => {
  const cartItems = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
  console.log(cartItems);
  const [CheckOutData, setChechkOutData] = useState({
    orderItems: [
      {
        quantity: "",
        product: "",
      },
    ],
    shippingAddress2: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    // Map the productQuantityArray into the orderItems array
    const updatedOrderItems = cartItems?cartItems.map((item) => ({
      quantity: item.quantity,
      product: item._id,
    })):[];

    // Update the state with the mapped array
    setChechkOutData((prevData) => ({
      ...prevData, // Preserve existing keys
      orderItems: updatedOrderItems,
    }));
  }, []);
  console.log(CheckOutData);

  const onChange = (e) => {
    setChechkOutData({
      ...CheckOutData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const headers = {
        'token': localStorage.getItem('token'), // Example: Add an authentication token
        'Content-Type': 'application/json', // Example: Specify content type
      };
    axios
      .post("http://localhost:3002/neworder", CheckOutData, {headers})
      .then((response) => {
        // Handle success
        console.log("order successfull:", response.data);
        setChechkOutData({
            orderItems: [
              {
                quantity: "",
                product: "",
              },
            ],
            shippingAddress2: "",
            city: "",
            zip: "",
            country: "",
            phone: "",
          })
        // You may want to reset the form or take other actions here
        localStorage.removeItem('cartItems')
      })
      
      .catch((error) => {
        // Handle error
        console.error("Error :", error);
      });
  };

  const getTotalQuantity = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const totalPrice = getTotalQuantity().toFixed(2);

  return (
    <>
{cartItems.map((item)=>(
    <p>{item.title}</p>
))}
    
      <form id="checkoutForm" class="custom-form">
        <div class="form-group">
          <label for="address2">Shipping Address 2:</label>
          <input
            type="text"
            id="address2"
            name="shippingAddress2"
            class="form-control"
            value={CheckOutData.shippingAddress2}
            onChange={onChange}
            required
          />
        </div>

        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            class="form-control"
            required
            value={CheckOutData.city}
            onChange={onChange}
          />
        </div>

        <div class="form-group">
          <label for="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            class="form-control"
            required
            value={CheckOutData.zip}
            onChange={onChange}
          />
        </div>

        <div class="form-group">
          <label for="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            class="form-control"
            required
            value={CheckOutData.country}
            onChange={onChange}
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="form-control"
            required
            value={CheckOutData.phone}
            onChange={onChange}
          />
        </div>

        <button onClick={handleClick} type="submit" class="custom-button">
          Place Order
        </button>
        <p>{totalPrice}</p>
      </form>
    </>
  );
};
