import React,{FC} from 'react';;
import styles from '../../styles/Home.module.scss';
import { myProduct, SetNewItem } from '../config';


interface PropsCart {
  product : myProduct
}
const AddCartButton:FC<PropsCart> = ({product:{id,image,title,price,Quantity}}) => {
  const cartProduct = {
    id,
    image,
    title,
    price,
    Quantity: 1
  }
  return (
    <>
      <button 
        className={styles.addcart__btn}
        onClick={() => SetNewItem(cartProduct)}
      >Add To Cart</button>
    </>
  )
}
export default AddCartButton;