import React, { useEffect, useState } from "react";
// import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../user/Reducers/CartSlice";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../../user/Reducers/ProductSlice";
import Slider, { FeaturedSlider } from "../Sliders/FeaturedSlider";

export const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(true);
  const data = Array.isArray(products) ? products : [];
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // Function to handle adding a product to the cart
  const click = (product) => {
    dispatch(addToCart(product));
    console.log(cart);
  };
  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      if (data) {
        setLoading(false);
      }
    }, 3000);
  }, []);

  const itemsPerPage = 5;
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {data
            ?
            data.map((product) => {
                return (
                  <ProductItem
                    data={product}
                    id={product._id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    itemsPerPage={itemsPerPage}
                    click={click}
                  />
                );
              }):<><div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div></>}
        </div>
      </div>

      {/* products ? <ProductItem data={data} 
    id = {data._id}
    title = {data.title}
    itemsPerPage={itemsPerPage} click={click} /> : <p>loading</p>}
    <FeaturedSlider images = {data}/> */}
    </>
  );
};
