import React, {FC, useState} from 'react'
import styles from '../../styles/Home.module.scss';
import { addToTotal, removeFromTotal, updateSingleProduct, useAppDispatch } from '../config';

interface ButtonProps{
  quantity: number;
  price: number;
  id: number;
  addUnit: () => void
  removeUnit: () => void
}

const QuantityButton:FC<ButtonProps> = ({quantity, price, id, addUnit, removeUnit}) => {
  const [myQuantity, setQuantity] = useState(quantity);
  const dispatch = useAppDispatch()
  const AddQan = () => {
    setQuantity(myQuantity + 1);
    dispatch(addToTotal(price));
    updateSingleProduct(id, 'add');
    addUnit();
  }
  const MinusQan = () => {
    setQuantity(myQuantity - 1);
    dispatch(removeFromTotal(price))
    updateSingleProduct(id, 'minus');
    removeUnit();
  };
  return (
    <div className={styles.quantity}>
      <button className={styles.minus_btn} type="button" name="button" onClick={MinusQan} disabled={myQuantity == 0 ? true : false}>
        <img src="./images/minus.svg" alt="" />
      </button>
      <input type="text" name="name" value={myQuantity} readOnly />
      <button className={styles.plus_btn} type="button" name="button" onClick={AddQan}>
        <img src="./images/plus.svg" alt="" />
      </button>
    </div>
  )
}
export default QuantityButton
