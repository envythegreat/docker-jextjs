import React, {FC} from 'react'
import styles from '../../styles/Home.module.scss'
import Product from './Product';
import { myProduct, useAppSelector } from '../config';

interface props{
  nextpage?: number;
  curentpage?: number;
}

const ProductList:FC <props>= ({nextpage, curentpage}) => {
  const products = useAppSelector(state => state.products.products.slice(curentpage, nextpage));
  const listProducts = products.map( (product:myProduct) => {
    return <Product product={product} key={product.id * Math.random() }/>
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