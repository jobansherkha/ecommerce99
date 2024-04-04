import { combineReducers } from "redux";
import { cartReducer } from "../user/Reducers/CartSlice";
import { productReducer } from "../user/Reducers/ProductSlice";
import { OrderSlice, orderReducer } from "../user/Reducers/OrderSlice";
import { categoryReducer } from "../user/Reducers/CategorySlice";



const rootReducer = combineReducers({
  
    cart : cartReducer,
    product: productReducer,
    order: orderReducer,
    category : categoryReducer
   
})

export default rootReducer


