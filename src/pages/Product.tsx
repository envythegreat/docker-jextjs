import React,{FC, useEffect, useState} from 'react';
import {AddCartButton} from '../component/cart/';
import {useAppSelector } from '../component/config/';
import styles from '../styles/Home.module.scss';

const Product:FC = () => {


  const product = useAppSelector(state => state.products.product);
  

  const [quantity, setQuantity] = useState(1);
  const addOne = () => setQuantity(quantity + 1);
  const minusOne = () => setQuantity(quantity - 1);
  const rate = useAppSelector(state => state.rate.singleRate)
  
  console.log(product)
  const singlep = Object.assign({Quantity: quantity}, product);
  console.log(singlep)
  return(
    <>
        <section className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <div className={styles.main}>
                
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className={styles.right}>
              
              <h1> {product.title} </h1>
              
              <div className={styles.price}> {(product.price * rate['rate']).toFixed(2)} {rate['sign']} </div>
              <div className={styles.quan__area}>
                <div className={styles.quantity}>
                  <button className={styles.minus_btn} type="button" name="button" onClick={minusOne}>
                    <img src="./images/minus.svg" alt="" />
                  </button>
                  <input type="text" name="name" value={quantity} onChange={() => null} />
                  <button className={styles.plus_btn} type="button" name="button" onClick={addOne}>
                    <img src="./images/plus.svg" alt="" />
                  </button>
                </div>
                <AddCartButton product={singlep} />
              </div>
              <h3>Product Description</h3>
              <p> {product.description} </p>
            </div>
          </div>
        </section>
    </>
  );
}
export default Product;