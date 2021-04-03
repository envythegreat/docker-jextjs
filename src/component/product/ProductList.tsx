import React, {FC} from 'react'
import styles from '../../styles/Home.module.scss'
import Product from './Product';
import { myProduct, useAppSelector } from '../config';
import { motion } from "framer-motion";



const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


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
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className={`${styles.section} ${styles.featured}`}>
      <motion.div variants={stagger} className={`${styles.featured__container} ${styles.bd_grid}`}>
          { 
           listProducts
          }
      </motion.div>
      </div>
    </motion.div>
  );
}
export default ProductList;