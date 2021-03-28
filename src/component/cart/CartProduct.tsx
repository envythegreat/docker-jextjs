import React, { FC, useEffect, useState } from 'react'
import { Trash2 } from 'react-feather';
import { QuantityButton } from '.';
import styles from '../../styles/Home.module.scss'
import { deleteProduct,myProduct, removeFromTotal, useAppDispatch, useAppSelector } from '../config';


interface ProductProps{
  product: myProduct;
  // updateTotal:(price: number) => void
}

const CartProduct:FC<ProductProps> = ({product}) => {

  
  const [displ, setDispl] = useState(false)
  const [price, setPrice] = useState(product.Quantity * product.price);

  const rate = useAppSelector(state => state.rate.singleRate)

  const addUnit = () => setPrice(price + product.price);
  const removeUnit = () => setPrice(price - product.price);

  const dispatch = useAppDispatch()
  const multitask = () => {
    deleteProduct(product.id);
    setDispl(true);
    dispatch(removeFromTotal(price));
  }

  return(
      <div className={styles.item} style={displ ? {display: 'none'} : null}>
        <div className={styles.buttons}>
          <span className={styles.delete_btn}>
            <Trash2 color="#E55947" onClick={multitask} /></span>
        </div>
        <img src={product.image} alt="" className={styles.product__image} />
        <div className={styles.description}>
          <span>{product.title}</span>
        </div>
        <QuantityButton 
          quantity={product.Quantity} 
          price={product.price}
          id={product.id}
          addUnit={addUnit}
          removeUnit={removeUnit}
        />
        <div className={styles.total_price}>{(price * rate['rate']).toFixed(2)} {rate['sign']}</div>
      </div>
  );
}
export default CartProduct;