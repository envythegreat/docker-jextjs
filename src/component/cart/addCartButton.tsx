import React,{FC, useState} from 'react';;
import styles from '../../styles/Home.module.scss';
import { myProduct, SetNewItem } from '../config';


interface PropsCart {
  product : myProduct
}
const AddCartButton:FC<PropsCart> = ({product:{id,image,title,price, Quantity}}) => {
  const [buttonText, setText] =  useState('Add To Cart')
  const cartProduct = {
    id,
    image,
    title,
    price,
    Quantity: Quantity ? Quantity : 1
  }
  return (
    <>
      <button 
        className={styles.addcart__btn}
        onClick={() => 
          {
            SetNewItem(cartProduct)
            setText('Added')
          }
        }
        disabled={buttonText === 'Added' ? true : false}
      >{buttonText}</button>
    </>
  )
}
export default AddCartButton;