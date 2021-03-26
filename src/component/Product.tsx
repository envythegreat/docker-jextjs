import * as React from 'react';
import styles from '../styles/Home.module.scss';
import {ShoppingCart} from 'react-feather'

interface PropsProduct {
  imgLink?: string
  productTitle?: string
  productPrice?: number
  productCurrency?: string
}

const Product: React.FC<PropsProduct> = ({imgLink, productTitle, productPrice, productCurrency}) => {
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
            <button>View Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

{/* <div className={styles.featured__product}>
        <div className={styles.featured__box}>
          <div className={styles.featured__new}>NEW</div>
          <img src={imgLink} alt="pp" className={styles.featured__img} />
        </div>
        <div className={styles.featured__data}>
          <h3 className={styles.featured__name}>{productTitle}</h3>
          <div className={styles.featured__footer}>
            <span className={styles.featured__price}>{productPrice}{productCurrency}</span>
            <button className={styles.featured__addcart}><ShoppingCart /></button>
          </div>
        </div>
      </div> */}
export default Product;

