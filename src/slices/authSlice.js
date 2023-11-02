import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getProfile = createAsyncThunk("getProfile", async (data, api) => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/todos`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
let url = "https://minaini.com:2053/r";
export const registerRedux = createAsyncThunk("register", async (data, api) => {
  try {
    const response = await axios.post(
      `${url}/pregister`,

      {
        password: data.password,
        name: data.name,
        phone_number: data.phone_number,
        email: data.email,
        gender: data.gender,
        identity: data.identity,
        birthdate: data.birthdate,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState: { value: 0 },
  reducers: {
    test: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerRedux.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { test } = authSlice.actions;

export default authSlice.reducer;
