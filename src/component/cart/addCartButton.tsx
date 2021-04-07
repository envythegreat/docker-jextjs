import Link from 'next/link';
import React,{FC, useState} from 'react';;
import styles from '../../styles/Home.module.scss';
import { myProduct, SetNewItem } from '../config';
import { AddCart } from './cart.styles';


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
      <AddCart
        onClick={() => 
          {
            buttonText === 'Go To Cart'
            ? null
            : SetNewItem(cartProduct)
              setText('Go To Cart')
          }
        }
      >
        {buttonText === 'Go To Cart'
          ?(<Link href="/Cart" >{buttonText}</Link> )
          : 'Add To Cart'}
      </AddCart>
      {/* <button 
        className={styles.addcart__btn}
        onClick={() => 
          {
            buttonText === 'Go To Cart'
            ? null
            : SetNewItem(cartProduct)
              setText('Go To Cart')
          }
        }
      >{buttonText === 'Go To Cart'
          ?(<Link href="/Cart" >{buttonText}</Link> )
          : 'Add To Cart'}</button> */}
    </>
  )
}
export default AddCartButton;