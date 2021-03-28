import Cookies from 'js-cookie';
import { myProduct } from '.';

const reset = (myCookies: Array<myProduct>) => {
  Cookies.remove('cartItem');
  Cookies.set('cartItem', JSON.stringify(myCookies), {path: '/',  expires: 3600})
}


export const checkifCookiesExist = () => {
  const checkifExist = document.cookie.indexOf('cartItem') != -1 ?  true :  false;
  if(!checkifExist){
    let data = [];
    Cookies.set('cartItem', JSON.stringify(data), {path: '/',  expires: 3600})
  }
}

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

export const deleteProduct = (id: number) => {
  let myCookies =  JSON.parse(Cookies.get('cartItem'));
  myCookies = myCookies.filter((Product:myProduct) => Product.id !== id )
  reset(myCookies)
}