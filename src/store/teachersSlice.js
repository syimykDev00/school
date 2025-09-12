// store/teachersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

// GET запрос мугалимдерди алуу үчүн
export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const data = await ApiFetch({
      url: "api/v1/teachers/",
      method: "GET",
    });
    return data;
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;
