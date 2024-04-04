import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("/fetchorders", async () => {
  try {
    const response = await axios.get(
      "https://backend1-hpb2.onrender.com/getuserorder", {
        headers: {
          'token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
          // Add any other headers you need
        }}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const fetchAllOrders = createAsyncThunk("/fetchAllorders", async () => {
  try {
    const response = await axios.get(
      "https://backend1-hpb2.onrender.com/getorder", {
        headers: {
          
          'Content-Type': 'application/json',
          // Add any other headers you need
        }}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const OrderSlice = createSlice({
  name: "Order",
  initialState: {
    orders: [],
    deleting: false,
    error: null,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const orderReducer = OrderSlice.reducer;