// store/educationSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

// GET запрос (курстарды алуу)
export const fetchSchool = createAsyncThunk("school/Schools", async () => {
  const data = await ApiFetch({
    url: "api/v1/pages/",
    method: "GET",
  });
  return data;
});

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchool.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSchool.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSchool.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default schoolSlice.reducer;
