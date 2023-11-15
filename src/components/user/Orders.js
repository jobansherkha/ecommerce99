import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './Reducers/OrderSlice';

export const Orders = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders());
        
      }, [dispatch])
      const orders = useSelector((state) => state.order.orders);
    console.log(orders)
  return (
    <div>Orders</div>
  )
}
