import Link from 'next/link';
import React from 'react'
import styles from '../styles/Home.module.scss'
import Product from './Product';
function AllProducts() {
  return(
    <>
      <div className={`${styles.section} ${styles.featured}`}>
        
          <div className={`${styles.featured__container} ${styles.bd_grid}`}>
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
            <Product imgLink="./images/head.png" productTitle="Headphone Black" productPrice={36.6} productCurrency={"$"} />
          </div>
          
      </div>
    </>
  );
}
export default AllProducts;