import { combineReducers } from "redux";
import { cartReducer } from "../user/Reducers/CartSlice";
import { productReducer } from "../user/Reducers/ProductSlice";
import { OrderSlice, orderReducer } from "../user/Reducers/OrderSlice";



const rootReducer = combineReducers({
  
    cart : cartReducer,
    product: productReducer,
    order: orderReducer
   
})

export default rootReducer


