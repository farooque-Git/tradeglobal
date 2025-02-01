import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dropdownTradingReducer from "./slices/dropdowntrading";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdownTradingReducer,
  },
});

export default store;
