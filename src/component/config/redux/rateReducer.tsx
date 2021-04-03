import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rate } from "..";


export interface rateState {
  singleRate: Rate;
  rates: Rate[];
}

const initialState: rateState = {
  singleRate: {rate: 0, sign: ''},
  rates: []
}
export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers:{
    setRate: (state, action: PayloadAction<Rate>) => {
      state.singleRate = action.payload
    },
    addRates: (state, action: PayloadAction<Rate[]>) => {
      state.rates = action.payload
    }
  }
});

export const {
  setRate,
  addRates
} = rateSlice.actions;