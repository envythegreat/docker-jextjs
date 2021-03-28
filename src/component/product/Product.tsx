import React, {FC, useEffect, useRef, useState} from 'react';
import styles from '../../styles/Home.module.scss'
import Link from 'next/link';
import { useAppDispatch, singleProduct, myProduct, useAppSelector, getCurrency } from '../config/';
import {AddCartButton} from '../cart';

interface PropsProduct {
  product : myProduct
}

const Product:FC<PropsProduct> = ({product}) => {
  const dispatch = useAppDispatch();
  const limitString =  (length: number, str: string) => {
    return str.length > length ? str.substring(0, length) + ".." : str;
  }
  const rate = useAppSelector(state => state.rate.singleRate)
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
            
              <button onClick={() => dispatch(singleProduct(product.id))}>
              <Link href="/Product">View More</Link>
              </button>
            
            <AddCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

