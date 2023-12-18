import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("/user/userdetails", async () => {
    try {
      const response = await axios.get(
        `https://backend1-hpb2.onrender.com/user/userdetails/${id}`, {
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
