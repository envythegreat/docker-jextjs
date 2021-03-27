import * as React from 'react';
import { getCookies, myProduct } from '../component/config';
import styles from '../styles/Home.module.scss';
import {CartProduct} from '../component/cart';



const Cart:React.FC = () => {
  let datas = getCookies();
  const Listitems = datas.map( (item:myProduct)=> {
    return <CartProduct product={item} />
  })
  return (
    <>
    <div className={styles.maons}>
      <div className={styles.shopping_cart}>
      <div className={styles.title__cart}>
        Shopping Bag
      </div>
      {Listitems}
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
