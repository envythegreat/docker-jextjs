import React, {FC, useEffect, useRef, useState} from 'react';
import styles from '../../styles/Home.module.scss'
import Link from 'next/link';
import { myProduct, useAppSelector, } from '../config/';
import {AddCartButton} from '../cart';
import { useRouter } from 'next/router'
interface PropsProduct {
  product : myProduct
}

const Product:FC<PropsProduct> = ({product}) => {
  // const dispatch = useAppDispatch();
  const limitString =  (length: number, str: string) => {
    return str.length > length ? str.substring(0, length) + ".." : str;
  }
  const rate = useAppSelector(state => state.rate.singleRate)
  const router = useRouter()
  return(
    <>
      <div className={styles.card}>
        <img src={product.image} alt="" />
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.details}>
              <span>{limitString(20, product.title)}</span>
            </div>
            <div className={styles.price}>{(product.price * rate['rate']).toFixed(2)} {rate['sign']}</div>
          </div>
          <div className={styles.buttons}>
            
              <button onClick={() => {
                router.push({
                  pathname: '/Product/[Product]',
                  query: { Product: JSON.stringify(product) },
                })
              }} >
                View More
              </button>
            
            <AddCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

