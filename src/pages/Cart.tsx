import React, {FC, useEffect, useState} from 'react';
import { getCookies, myProduct, useAppDispatch, useAppSelector } from '../component/config';
import styles from '../styles/Home.module.scss';
import {CartProduct} from '../component/cart';
import { getTotalAmount } from '../component/config';


const Cart:FC = () => {
  const [data, setData] = useState('')
  const rate = useAppSelector(state => state.rate.singleRate)
  const dispatch = useAppDispatch();
  useEffect(() => {
    let datas = getCookies();
    let total = 0;
    setData(datas.map( (item:myProduct)=> {
      total += item.price * item.Quantity;
      return <CartProduct product={item} key={item.Quantity * Math.random()} />
    }))
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


export default Cart;
