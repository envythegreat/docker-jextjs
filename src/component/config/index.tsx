export {
  useAppDispatch,
  useAppSelector
} from './hooks';

export {Api} from './api';

export {
  addProducts,
  singleProduct,
  store,
  getTotalAmount,
  addToTotal,
  removeFromTotal
} from './store'

export {
  SetNewItem,
  getCookies,
  deleteProduct,
  checkifCookiesExist,
  updateSingleProduct
} from './cookies'

export type {myProduct} from './type'