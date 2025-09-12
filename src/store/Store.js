// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./Apllication";
import priceReducer from "./GetPriceSlice";
import teachersReducer from "./teachersSlice";
import educationReducer from "./educationSlice";
import school from "./schoolSlice";
export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    price: priceReducer,
    teachers: teachersReducer,
    education: educationReducer, // 👈 education slice ушул жерде
    school: school,
  },
});
