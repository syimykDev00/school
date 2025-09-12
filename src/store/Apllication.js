import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiFetch, { appFile } from "../api/ApiFetch";

// форма жөнөтүү
export const sendBookingForm = createAsyncThunk(
  "booking/sendBookingForm",
  async (formData) => {
    const data = await ApiFetch({
      url: "api/v1/applications/",
      method: "POST",
      body: formData,
    });
    console.log(data);
    // сервер берген idди payload’ка кошуп кайтарабыз
    return data;
  }
);

// PDF жөнөтүү (FormData)
export const sendBookingFile = createAsyncThunk(
  "booking/sendBookingFile",
  async ({ file, id }) => {
    const formData = new FormData();
    formData.append("pdf", file); // 👈 backend күткөн ат: pdf
    console.log("FormData payload:", [...formData]);

    const data = await appFile({
      url: `api/v1/applications/${id}/upload_pdf/`,
      body: formData,
    });
    return data;
  }
);

const initialState = {
  formStatus: null,
  fileStatus: null,
  fileError: null,
  formError: null,
  applicationId: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.formStatus = null;
      state.formError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // форма
      .addCase(sendBookingForm.pending, (state) => {
        state.formStatus = "pending";
      })
      .addCase(sendBookingForm.fulfilled, (state, action) => {
        state.formStatus = "success";
        state.applicationId = action.payload.id; // сервер берген id сакталат
      })
      .addCase(sendBookingForm.rejected, (state, action) => {
        state.formError = action.error.message;
      })

      // файл
      .addCase(sendBookingFile.pending, (state) => {
        state.fileStatus = "pending";
      })
      .addCase(sendBookingFile.fulfilled, (state) => {
        state.fileStatus = "success";
      })
      .addCase(sendBookingFile.rejected, (state, action) => {
        state.fileError = action.error.message;
      });
  },
});

export const { resetStatus } = bookingSlice.actions;
export default bookingSlice.reducer;
