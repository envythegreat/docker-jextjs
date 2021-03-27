import React, {FC} from 'react';
import styles from '../../styles/Home.module.scss'
import {singleProduct, State} from '../config/store'
import Link from 'next/link';
import { useAppDispatch } from '../config/hooks';
import AddCartButton from '../cart/addCartButton';

interface PropsProduct {
  imgLink?: string
  productTitle?: string
  productPrice?: number
  productCurrency?: string
  productID: number;
}
{/* <Link href={{ pathname: '/Product', query: { id: productID} }}>View Now</Link> */}

const Product:FC<PropsProduct> = ({imgLink, productTitle, productPrice, productCurrency, productID}) => {
  const dispatch = useAppDispatch();
  return(
    <>
      <div className={styles.card}>
        <img src={imgLink} alt="" />
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.details}>
              <span>{productTitle}</span>
            </div>
            <div className={styles.price}>{productPrice} {productCurrency}</div>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => dispatch(singleProduct(productID))}>
                <Link href="/Product">View More</Link>
            </button>
            <AddCartButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

