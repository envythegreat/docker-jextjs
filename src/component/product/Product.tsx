import React, {FC} from 'react';
import styles from '../../styles/Home.module.scss'
import Link from 'next/link';
import { useAppDispatch, singleProduct, myProduct } from '../config/';
import {AddCartButton} from '../cart';

interface PropsProduct {
  product : myProduct
}
{/* <Link href={{ pathname: '/Product', query: { id: productID} }}>View Now</Link> */}

const Product:FC<PropsProduct> = ({product}) => {
  const dispatch = useAppDispatch();
  const limitString =  (length: number, str: string) => {
    return str.length > length ? str.substring(0, length) + ".." : str;
  }
  return(
    <>
      <div className={styles.card}>
        <img src={product.image} alt="" />
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.details}>
              <span>{limitString(20, product.title)}</span>
            </div>
            <div className={styles.price}>{product.price}</div>
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

