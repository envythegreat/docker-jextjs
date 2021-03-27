import * as React from 'react'
import { Trash2 } from 'react-feather';
import styles from '../../styles/Home.module.scss'
interface ProductProps{
  productImg: string;
  productPrice: number;
  productQuantity: string;
  productTite: string;
}
const CartProduct:React.FC<ProductProps> = ({productImg, productPrice, productQuantity, productTite}) => {
  return(
      <div className={styles.item}>
        <div className={styles.buttons}>
          <span className={styles.delete_btn}><Trash2 color="#E55947" /></span>
        </div>
          <img src={productImg} alt="" className={styles.product__image} />
        <div className={styles.description}>
          <span>{productTite}</span>
        </div>
        <div className={styles.quantity}>
          <button className={styles.minus_btn} type="button" name="button">
            <img src="./images/minus.svg" alt="" />
          </button>
          <input type="text" name="name" value={productQuantity} />
          <button className={styles.plus_btn} type="button" name="button">
            <img src="./images/plus.svg" alt="" />
          </button>
        </div>
        <div className={styles.total_price}>{productPrice}</div>
      </div>
  );
}
export default CartProduct;