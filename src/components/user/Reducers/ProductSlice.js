import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try { 
      const response = await axios.get(
        "https://backend1-hpb2.onrender.com/product/getproduct"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const ProductSlice = createSlice({
  name: "product",

  initialState: {
    products: [],
    deleting: false,
    error: null,
    status: "idle",
  },

  reducers: {
    selectedProduct: (state, action) => {
        return {
          state,
          ...state,
          products: action.payload,
        };
        
        
      },
      removeSelectedProduct: (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const productReducer = ProductSlice.reducer;
export const { selectedProduct, removeSelectedProduct } =
  ProductSlice.actions;