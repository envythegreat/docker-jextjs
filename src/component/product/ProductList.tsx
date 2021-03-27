import React, {FC} from 'react'
import styles from '../../styles/Home.module.scss'
import Product from './Product';
import { useAppSelector } from '../config';

interface props{
  nextpage?: number;
  curentpage?: number;
}

const ProductList:FC <props>= ({nextpage, curentpage}) => {
  const limitString =  (length: number, str: string) => {
    return str.length > length ? str.substring(0, length) + ".." : str;
  }
  const products = useAppSelector(state => state.products.products.slice(curentpage, nextpage));
  const listProducts = products.map( product => {
    return <Product product={product} />
  })
  return(
    <>
      <div className={`${styles.section} ${styles.featured}`}>
        <div className={`${styles.featured__container} ${styles.bd_grid}`}>
          { 
           listProducts
          }
        </div>
      </div>
    </>
  );
}
export default ProductList;