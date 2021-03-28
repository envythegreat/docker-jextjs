import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { myProduct } from "..";

export interface State {
  products: Array<myProduct>;
  product: myProduct;
  totalAmount: number;
}

const initialState : State = {
  products: [],
  product: null,
  totalAmount: 0
}



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    addProducts: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
    singleProduct: (state, action: PayloadAction<{}>) => {
      state.product = state.products.find(product => product.id === action.payload)
    },
    getTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
    addToTotal: (state, action:PayloadAction<number>) => {
      state.totalAmount += action.payload
    },
    removeFromTotal: (state, action:PayloadAction<number>) => {
      state.totalAmount -= action.payload
    }
  }
})

export const {addProducts, singleProduct, getTotalAmount, addToTotal, removeFromTotal} = productSlice.actions