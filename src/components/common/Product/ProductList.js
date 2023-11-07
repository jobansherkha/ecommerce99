import React, { useEffect } from "react";
// import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../user/Reducers/CartSlice";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../../user/Reducers/ProductSlice";
import Slider, { FeaturedSlider } from "../Sliders/FeaturedSlider";
export const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const data = Array.isArray(products) ? products : [];
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // Function to handle adding a product to the cart
  const click = (product) => {
    dispatch(addToCart(product));
    console.log(cart);
  };

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
            {data.map((product) => {
        return (<ProductItem
                data={product}
                id={product._id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                itemsPerPage={itemsPerPage}
                click={click}
              />);
            })}
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
