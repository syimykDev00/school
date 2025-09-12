import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const fetchTuition = createAsyncThunk("price/fetchTuition", async () => {
  const data = await ApiFetch({
    url: "api/v1/tuition/",
    method: "GET",
  });
  return data;
});

const priceSlice = createSlice({
  name: "price",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTuition.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTuition.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTuition.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default priceSlice.reducer;
