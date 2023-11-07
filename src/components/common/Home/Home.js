import React, { useEffect } from 'react'
import { Header } from '../Header/Header'
import { ProductList } from '../Product/ProductList'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../user/Reducers/ProductSlice'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch])
  return (
    <>
    
    <ProductList />
    <Footer/>
  </>
  )
}
