import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import parkingsReducer from "../features/Parkings/parkingsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    parkings: parkingsReducer,
  },
});