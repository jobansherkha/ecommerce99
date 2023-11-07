import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { removeSelectedProduct, selectedProduct } from '../../user/Reducers/ProductSlice';
import { addToCart } from '../../user/Reducers/CartSlice';


export const ProductDetails = () => {

    const {id} = useParams();
    const {products} = useSelector((state)=> state.product);
    const dispatch = useDispatch();

    const fetchproductDetails = async()=>{
        try{
        const response = await axios
        .get(`http://localhost:3002/product/getproduct/${id}`)
        dispatch(selectedProduct(response.data))
    }
    catch (error) {
        console.error('Error:', error);
      }
    
         

          
    };
    useEffect(()=>{
 
        if (id && id !=="") fetchproductDetails();
        else
        return()=>{ dispatch(removeSelectedProduct(id))
    
        }
    
      },[id])
    
  return <div><div class="containerP">
  <div class="product-imageP">
    <img src={products.image} alt="Product Image"/>
  </div>
  <div class="product-infoP">
    <h1 class="product-titleP">{products.title}</h1>
    <p class="product-descriptionP">{products.description}.</p>
    <div class="product-priceP">${products.price}</div>
    <button class="add-to-cartP" onClick={()=>{dispatch(addToCart(products))}}>Add to Cart</button>
  </div>
</div></div>;
}
