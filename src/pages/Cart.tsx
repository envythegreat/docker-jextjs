import React, {FC, useEffect, useState} from 'react';
import {
  addRates,
  myProduct,
  Rate,
  setRate,
  useAppDispatch,
  useAppSelector,
  getAllCookies
} from '../component/config';
import styles from '../styles/Home.module.scss';
import {CartProduct} from '../component/cart';
import { getTotalAmount } from '../component/config';
import { GetServerSideProps } from 'next';


interface Props {
  cartCookie: myProduct[],
  currenncy: Rate,
  rates: Rate[]
}

const Cart:FC<Props> = ({cartCookie, currenncy, rates}) => {
  let total = 0;
  const [data, setData] = useState(() => cartCookie.map( (item:myProduct)=> {
    total += item.price * item.Quantity;
    return <CartProduct product={item} key={item.Quantity * Math.random()} />
  }))

  const rate = useAppSelector(state => state.rate.singleRate)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setRate(currenncy))
    dispatch(addRates(rates))
    dispatch(getTotalAmount(total))
  }, [])
  
  const redux_Total =  useAppSelector(state => state.products.totalAmount)
  return (
    <>
    <div className={styles.maons}>
      <div className={styles.shopping_cart}>
      <div className={styles.title__cart}>
        Shopping Bag
      </div>
      {data}
      <div className={styles.amount__cart}>
        <span>Total amount : </span>
        <span>{(redux_Total * rate['rate']).toFixed(2) } {rate['sign']}</span>
      </div>
    </div>
    </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const cartCookie = getAllCookies(req)
  return{
    props :{
      cartCookie: JSON.parse(cartCookie.cartItem),
      currenncy: JSON.parse(cartCookie.currency),
      rates: JSON.parse(cartCookie.rates)
    }
  }
}


export default Cart;
