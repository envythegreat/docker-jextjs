import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface rateState {
  singleRate: Object;
  rates: Object;
}

const initialState: rateState = {
  singleRate: {},
  rates: {}
}
export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers:{
    setRate: (state, action: PayloadAction<Object>) => {
      state.singleRate = action.payload
    },
    addRates: (state, action: PayloadAction<Object>) => {
      state.rates = action.payload
    }
  }
});

export const {setRate, addRates} = rateSlice.actions;