import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchCategories = createAsyncThunk(
    "/fetchCategories",
    async () => {
      try { 
        const response = await axios.get(
          "https://backend1-hpb2.onrender.com/category/getcategories"
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );
export const categorySlice = createSlice(
    {
        name : "category",
        initialState : {
            categories : [],
        },
        reducers : {

            setCategory : (state, action)=>{
    
                return{
                    state, ...state, categories: action.payload
                }
    
            }
    
    
        },
        extraReducers: (builder) => {
            builder
              .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
              })
              .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
              })
              .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
              });
          },

    },
    
    
)
export const categoryReducer = categorySlice.reducer;
export const {setCategory} = categorySlice.actions;
