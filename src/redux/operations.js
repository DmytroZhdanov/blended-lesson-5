import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "../services/getUserInfo";

export const baseCurrencyThunk = createAsyncThunk(
  "fetchBaseCurrency",
  async (crd, thunkAPI) => {
    const { baseName } = thunkAPI.getState();
    if (baseName) {
      return thunkAPI.rejectWithValue("We already have base currency.");
    }
    try {
      const data = await userInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
