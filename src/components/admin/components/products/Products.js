import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'
// import { deleteProduct, fetchProducts, removeSelectedProduct } from '../../../redux/Reducers/productSlice'
import { useEffect } from "react";
import axios from "axios";
import { deleteProduct, fetchProducts, removeSelectedProduct } from '../../../user/Reducers/ProductSlice';
import { Link } from 'react-router-dom';

export const Products = () => {
    
   const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    console.log(products);
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3002/product/getproduct");
    //     console.log(response.data);
    //     dispatch(setProducts(response.data));
    //   } catch (error) {
    //     console.log("Error fetching products", error);
    //   }
    // };
     // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);
   
    const handleRemoveProduct = (productId) => {
      // Dispatch the removeProduct action with the product's ID
     dispatch( deleteProduct(productId));
     dispatch(fetchProducts());
     
    };
    
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product List</h2>
        <Link to = "/admin/addproduct" className="btn btn-dark" >Add Product</Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button className="btn btn-outline-dark mr-2">Edit</button>
                <button onClick={() => handleRemoveProduct(product._id)} className="btn btn-dark">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
