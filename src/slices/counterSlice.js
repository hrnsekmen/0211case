import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk("getProfile", async (data, api) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const counterSlice = createSlice({
  name: "test",
  initialState: { value: 0 },
  reducers: {
    test: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});
export const { test } = counterSlice.actions;

export default counterSlice.reducer;
