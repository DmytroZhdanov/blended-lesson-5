import { createSlice } from "@reduxjs/toolkit";
import { baseCurrencyThunk } from "./operations";

const currencySlice = createSlice({
  name: "currency",
  initialState: { baseName: "" },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseName = action.payload;
    },
  },
  extraReducers: {
    [baseCurrencyThunk.fulfilled](state, action) {
      state.baseName = action.payload;
    },
  },
});

export const { reducer: currencyReducer } = currencySlice;
export const { setBaseCurrency } = currencySlice.actions;
