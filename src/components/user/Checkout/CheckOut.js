import axios from "axios";
import React, { useEffect, useState } from "react";

export const CheckOut = (props) => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

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
    const updatedOrderItems = cartItems
      ? cartItems.map((item) => ({
          quantity: item.quantity,
          product: item._id,
        }))
      : [];

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
      token: localStorage.getItem("token"), // Example: Add an authentication token
      "Content-Type": "application/json", // Example: Specify content type
    };
    axios
      .post("http://localhost:3002/neworder", CheckOutData, { headers })
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
        });
        // You may want to reset the form or take other actions here
        localStorage.removeItem("cartItems");
      })

      .catch((error) => {
        // Handle error
        console.error("Error :", error);
      });
  };
  const getTotalProducts = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += cartItems.length * item.quantity;
    });
    return total;
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
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({getTotalProducts()})
                    <span>${Math.round(totalPrice)}</span>
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
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Billing address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" novalidate>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label for="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6 my-1">
                      <label for="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address2"
                        name="shippingAddress2"
                        value={CheckOutData.shippingAddress2}
                        onChange={onChange}
                        className="form-control"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="col-md-5 my-1">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <br />
                      <select
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={CheckOutData.country}
                        onChange={onChange}
                        className="form-select"
                      >
                        <option value="">Choose...</option>
                        <option>canada</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4 my-1">
                      <label for="state" className="form-label">
                        City
                      </label>
                      <br />
                      <select
                        type="text"
                        id="city"
                        name="city"
                        class="form-control"
                        required
                        value={CheckOutData.city}
                        onChange={onChange}
                        className="form-select"
                      >
                        <option value="">Choose...</option>
                        <option>Brampton</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3 my-1">
                      <label for="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        required
                        value={CheckOutData.zip}
                        onChange={onChange}
                        className="form-control"
                        placeholder=""
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </form>
                <hr className="my-4" />

                <button
                  className="w-100 btn btn-primary "
                  type="submit"
                  disabled
                >
                  Continue to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {cartItems.map((item) => (
        <p>{item.title}</p>
      ))} */}

      {/* <form id="checkoutForm" class="custom-form">
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
      </form> */}
    </>
  );
};
