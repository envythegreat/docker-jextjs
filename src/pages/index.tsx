import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Hero from '../component/Hero';
import ProductList from '../component/product/ProductList';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {
  addProducts,
  Api,
  checkifCookiesExist,
  getCurrency,
  rateCookies,
  useAppDispatch,
  addRates,
  setRate,
  myProduct,
  Rate
} from '../component/config/';



interface Props {
  data: Array<myProduct>,
  rate: Array<Rate>
}


const Home:FC<Props> = ({data, rate}) => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    // check if rate cookies exist
    rateCookies(rate)
    checkifCookiesExist('cartItem')
    checkifCookiesExist('currency')
    
    // to avoid infinite render in useEffect i had to use state when i update component and we only get data from cookies once
    // check if products cookies exist
    dispatch(addProducts(data));
    dispatch(addRates(rate));
    dispatch(setRate(getCurrency()))
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>E-shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className={styles.l_main}>
        <h2 className={styles.section__title}>FEATURED PRODUCTS</h2>
        <ProductList curentpage={0} nextpage={10} />
        <Link href="/Products">
          <a className={styles.section__all}>View All</a>
        </Link>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const resRate = Api('Rates')
  const res = Api('Product');
  return{ props: {
    data : (await res).data,
    rate: (await resRate).data.rates
  } }
}
export default Home;