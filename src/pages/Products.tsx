import * as  React from 'react';
import AllProducts from '../component/AllProducts';
import styles from '../styles/Home.module.scss'


const Products:React.FC = () => {
  return(
    <>
    <main className={styles.l_main}>
        <div className={styles.search__container}>
          <input className={styles.search__input} type="text" placeholder="Search" />
        </div>
        <AllProducts />
      </main>
    </>
  );
}

export default Products;