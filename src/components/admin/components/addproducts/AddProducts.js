import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addItemAsync } from "../../../user/Reducers/ProductSlice";
import { fetchCategories, setCategory } from "../../../user/Reducers/CategorySlice";

// import { addItemAsync, addProduct } from '../../redux/Reducers/productSlice';

export const AddProduct = () => {
  const dispatch = useDispatch();

  // const fetchCategories = async () => {
  //   const response = await axios
  //     .get("https://backend1-hpb2.onrender.com/category/getcategories")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });

  //   dispatch(setCategory(response.data));
  // };
  useEffect(() => {
   fetchCategories();
    
  }, []);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  const { categories } = useSelector((state) => state.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newproducts = dispatch(addItemAsync(product));

    setProduct({
      title: "",
      image: "",
      description: "",
      price: "",
      category: "",
    });
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row my-4">
          <form className="needs-validation" novalidate>
            <div className="row g-3">
              <div className="col-sm-6 my-1">
                <label for="firstName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                  required
                />
                <div className="invalid-feedback">
                  Valid product name is required.
                </div>
              </div>

              <div className="col-sm-6 my-1">
                <label for="lastName" className="form-label">
                  Product Description
                </label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  id="productDescription"
                  rows="3"
                  placeholder="Enter product description"
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Product Description is required.
                </div>
              </div>

              <div className="col-12 my-1">
                <label for="email" className="form-label">
                  Product Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                  id="productPrice"
                  placeholder="Enter product price"
                  required
                />
                <div className="invalid-feedback">enter product price</div>
              </div>

              <div className="col-12 my-1">
                <label for="address" className="form-label">
                  Product Image
                </label>
                <input
                  name="image"
                  placeholder="Product image"
                  value={product.image}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="productImage"
                  
                />
                <div className="invalid-feedback">upload product image</div>
              </div>

              <div className="col-12">
                <label for="address2" className="form-label">
                  Product category <span className="text-muted"></span>
                </label>
                <select
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select a Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
