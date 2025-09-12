import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const getCardById = createAsyncThunk(
  "likeandbookmark/getCardsById",
  async () => {
    const card = await ApiFetch({
      url: `api/v1/teachers/
`,
    });
    return card;
  }
);
const initialState = {
  teachers: null, // APIден келген маалымат
  status: null, // 'pending' | 'success' | 'error'
  error: null, // ката болсо сактоо
};

const getTeachers = createSlice({
  name: "getTeachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCardById.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getCardById.fulfilled, (state, action) => {
        state.status = "success";
        state.teachers = action.payload;
      })
      .addCase(getCardById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default getTeachers.reducer;
