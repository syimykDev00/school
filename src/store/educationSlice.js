import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const fetchEducation = createAsyncThunk(
  "education/fetchCourses",
  async () => {
    const data = await ApiFetch({
      url: "api/v1/extra-courses/",
      method: "GET",
    });
    return data;
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
