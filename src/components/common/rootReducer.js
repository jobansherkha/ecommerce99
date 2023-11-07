import { combineReducers } from "redux";
import { cartReducer } from "../user/Reducers/CartSlice";
import { productReducer } from "../user/Reducers/ProductSlice";



const rootReducer = combineReducers({
  
    cart : cartReducer,
    product: productReducer,
   
})

export default rootReducer


