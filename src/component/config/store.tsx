import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
  products: Array<any>;
  product: object;
}

const initialState : State = {
  products: [],
  product: {}
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
    }
  }
})

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  }
})

export const {addProducts, singleProduct} = productSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch