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
    education: educationReducer,
    school: school,
  },
});
