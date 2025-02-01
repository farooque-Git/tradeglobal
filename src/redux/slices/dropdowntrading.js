import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platform: [
    { label: "Android Terminal", link: "/platform/android" },
    { label: "Desktop Terminal", link: "/platform/desktop" },
    { label: "iPhone Terminal", link: "/platform/ios" },
  ],
  trading: [
    { label: "Forex", link: "/trading/forex" },
    { label: "Stocks", link: "/trading/stocks" },
    { label: "Crypto", link: "/trading/crypto" },
  ],
};

const dropdownTradingSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {},
});

export const selectDropdown = (state) => state.dropdown;
export default dropdownTradingSlice.reducer;
