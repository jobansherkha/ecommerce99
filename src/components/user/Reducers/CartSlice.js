import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        toast.info("product quantity increased", { position: "bottom-left" });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("product added to cart", { position: "bottom-left" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  

  increaseQuantity: (state, action) => {
    const item = state.cart.find((item) => item._id === action.payload);
    item.quantity++;
    toast.info("product quantity increased", { position: "bottom-left" });
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  },
  decreaseQuantity: (state, action) => {
    const item = state.cart.find((item) => item._id === action.payload);
    if (item.quantity == 1) {
      item.quantity = 1;
    } else {
      item.quantity--;
      toast.info("product quantity decreased", { position: "bottom-left" });
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  },
  removeItem: (state, action) => {
    const removeItem = state.cart.filter((item) => item._id !== action.payload);
    state.cart = removeItem;
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  },},
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
