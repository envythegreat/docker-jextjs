import * as React from 'react';
import styles from '../styles/Home.module.scss';
import CartProduct from '../component/cart/CartProduct'
const Cart:React.FC = () => {
  return (
    <>
    <div className={styles.maons}>
      <div className={styles.shopping_cart}>
      <div className={styles.title__cart}>
        Shopping Bag
      </div>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <div className={styles.amount__cart}>
        <span>Total amount : </span>
        <span>500 $</span>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cart;