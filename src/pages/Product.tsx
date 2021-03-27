import *  as React from 'react';
import {AddCartButton} from '../component/cart/';
import { useAppSelector } from '../component/config/hooks';
import styles from '../styles/Home.module.scss';

const Product:React.FC = () => {
  const product = useAppSelector(state => state.products.product);
  console.log(typeof {})
  return(
    <>
        <section className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <div className={styles.main}>
                {/*@ts-ignore*/}
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className={styles.right}>
              {/*@ts-ignore*/}
              <h1> {product.title} </h1>
              {/*@ts-ignore*/}
              <div className={styles.price}> {product.price} </div>
              <div className={styles.quan__area}>
                <div className={styles.quantity}>
                  <button className={styles.minus_btn} type="button" name="button">
                    <img src="./images/minus.svg" alt="" />
                  </button>
                  <input type="text" name="name" />
                  <button className={styles.plus_btn} type="button" name="button">
                    <img src="./images/plus.svg" alt="" />
                  </button>
                </div>
                <AddCartButton />
              </div>
              <h3>Product Description</h3>
              {/*@ts-ignore*/}
              <p> {product.description} </p>
            </div>
          </div>
        </section>
    </>
  );
}
export default Product;;