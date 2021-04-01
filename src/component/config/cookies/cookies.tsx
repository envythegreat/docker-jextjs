import Cookies from 'js-cookie';
import { myProduct } from '..';

// remove old cookies and add new ones
const reset = (myCookies: Array<myProduct>) => {
  Cookies.remove('cartItem');
  Cookies.set('cartItem', JSON.stringify(myCookies), {path: '/',  expires: 3600})
}

// store all currency rates are comming from the api
export const rateCookies = (data: object) => {
  Cookies.set('rates', JSON.stringify(data));
}
// get currency rates cookies
export const getRates = () => {
  return JSON.parse(Cookies.get('rates'));
}

// check if the product cookies exist if not create new one with new array
export const checkifCookiesExist = () => {
  const checkifExist = document.cookie.indexOf('cartItem') != -1 ?  true :  false;
  if(!checkifExist){
    let data = [];
    Cookies.set('cartItem', JSON.stringify(data), {path: '/',  expires: 3600})
  }
}

// store the latest cuurency used 
export const handleCurneccy = (rate: number, sign: string) => {
  Cookies.set('currency', JSON.stringify({rate, sign}))
}
//check if currency cookies exist if not creat new one with Dollar as a default currency
export const checkifCurrency = () => {
  const checkifExist = document.cookie.indexOf('currency') != -1 ?  true :  false;
  if(!checkifExist){
    Cookies.set('currency', JSON.stringify({rate: 1, sign: '$'}))
  }
}
// get currency product
export const getCurrency = () => {
  return JSON.parse(Cookies.get('currency'))
}

// update the quantity of a product inside a cookies array
export const updateSingleProduct = (id: number, str: string) => {
  let myCookies =  JSON.parse(Cookies.get('cartItem'));
  let isProductExist = myCookies.filter((cookie: myProduct ) => cookie.id === id)
  if(isProductExist.length !== -1){
    myCookies = myCookies.filter(( cookie: myProduct ) => cookie.id !== id)
    str === 'add' ? isProductExist[0].Quantity += 1 : isProductExist[0].Quantity -= 1
    myCookies.push(isProductExist[0])
  }
  reset(myCookies) 
}

// add a new product the cookies
export const SetNewItem = (product: myProduct) => {
  let myCookies =  JSON.parse(Cookies.get('cartItem'));
  let ifProductExist = myCookies.filter((cookie: myProduct ) => cookie.id === product.id)
  if(ifProductExist.length == 0){
    myCookies.push(product);
  }else {
    myCookies = myCookies.filter((cookie: myProduct ) => cookie.id !== ifProductExist[0].id )
    ifProductExist[0].Quantity += product.Quantity;
    myCookies.push(ifProductExist[0])
  }
  reset(myCookies) 
}

export const getCookies = () => {
   return JSON.parse(Cookies.get('cartItem'));
}
// delete a product from the cookies
export const deleteProduct = (id: number) => {
  let myCookies =  JSON.parse(Cookies.get('cartItem'));
  myCookies = myCookies.filter((Product:myProduct) => Product.id !== id )
  reset(myCookies)
}