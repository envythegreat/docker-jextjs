import * as React from 'react'
import { Trash2 } from 'react-feather';
import styles from '../../styles/Home.module.scss'
import { deleteProduct, myProduct } from '../config';


interface ProductProps{
  product: myProduct;
}

const CartProduct:React.FC<ProductProps> = ({product}) => {

  const price = product.Quantity * product.price;;
  return(
      <div className={styles.item}>
        <div className={styles.buttons}>
          <span className={styles.delete_btn} onClick={() => {deleteProduct(1)}}><Trash2 color="#E55947" /></span>
        </div>
          <img src={product.image} alt="" className={styles.product__image} />
        <div className={styles.description}>
          <span>{product.title}</span>
        </div>
        <div className={styles.quantity}>
          <button className={styles.minus_btn} type="button" name="button">
            <img src="./images/minus.svg" alt="" />
          </button>
          <input type="text" name="name" value={product.Quantity} onChange={() => alert('pp')} />
          <button className={styles.plus_btn} type="button" name="button">
            <img src="./images/plus.svg" alt="" />
          </button>
        </div>
        <div className={styles.total_price}>{price}</div>
      </div>
  );
}
export default CartProduct;