import * as  React from 'react';
import {ProductList} from '../component/product';
import styles from '../styles/Home.module.scss'


const Products:React.FC = () => {
  return(
    <>
      <main className={styles.l_main}>
        <ProductList />
      </main>
    </>
  );
}

export default Products;