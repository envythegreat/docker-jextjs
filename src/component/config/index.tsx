

export {
  useAppDispatch,
  useAppSelector
} from './hooks';

export {Api} from './api';


export {
  productSlice,
  getTotalAmount,
  addToTotal,
  removeFromTotal,
  addProducts,
  singleProduct,
} from './productReducer';

export {
  SetNewItem,
  getCookies,
  deleteProduct,
  checkifCookiesExist,
  updateSingleProduct,

  handleCurneccy,
  getCurrency,
  checkifCurrency
} from './cookies';

export {
  rateSlice,
  setRate,
} from './rateReducer';

export type {myProduct} from './type';