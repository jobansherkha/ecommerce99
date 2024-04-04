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

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (productId, thunkAPI) => {
      try {
        // Perform the DELETE API request
        await axios.delete(`https://backend1-hpb2.onrender.com/product/delete/${productId}`);
  
        // Return the product ID to be used in the success reducer
        return productId;
      } catch (error) {
        // Thunk will automatically dispatch the failure action if an error occurs
        throw error;
      }
    }
  );

  export const addItemAsync = createAsyncThunk(
    "items/addItemAsync",
    async (product) => {
      const response = await axios.post(
        "https://backend1-hpb2.onrender.com/product/addproduct",
        product
      );
      return response.data;
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