import Cookies from 'js-cookie';

export const SetNewItem = (product: any) => {
  const checkifExist = document.cookie.indexOf('cartItem') != -1 ?  true :  false
  if(!checkifExist){
    let data = [];
    data.push(product)
    Cookies.set('cartItem', JSON.stringify(data), {path: '/',  expires: 3600})
  }else {
    let myCookies =  JSON.parse(Cookies.get('cartItem'));
    let ifProductExist = myCookies.filter(cookie => cookie.id === product.id)
    if(ifProductExist.length == 0){
      myCookies.push(product);
    }else {
      myCookies = myCookies.filter(cookie => cookie.id !== ifProductExist[0].id )
      ifProductExist[0].Quantity += product.Quantity;
      myCookies.push(ifProductExist[0])
    }
    Cookies.remove('cartItem')
    Cookies.set('cartItem', JSON.stringify(myCookies), {path: '/',  expires: 3600})
  }
}

export const getCookies = () => {
   return JSON.parse(Cookies.get('cartItem'))
}

export const deleteProduct = (id: number) => {
  let myProducts = JSON.parse(Cookies.get('cartItem'));
  myProducts = myProducts.filter(Product => Product.id !== id )
  Cookies.remove('cartItem');
  Cookies.set('cartItem', JSON.stringify(myProducts), {path: '/',  expires: 3600})
}