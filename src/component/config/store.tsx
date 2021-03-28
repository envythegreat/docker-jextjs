import { configureStore} from '@reduxjs/toolkit'
import { rateSlice, productSlice } from '.';





export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    rate: rateSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch