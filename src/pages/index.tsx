import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Hero from '../component/Hero';
import ProductList from '../component/product/ProductList';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {addProducts, Api, checkifCookiesExist, checkifCurrency, getCurrency, useAppDispatch} from '../component/config/';
import { addRates, setRate } from '../component/config/rateReducer';



interface Props {
  data: [],
  rate: []
}


const Home:FC<Props> = ({data, rate}) => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addProducts(data));
    // check if products cookies exist
    checkifCookiesExist();
    // check if rate cookies exist
    checkifCurrency();

    dispatch(addRates(rate));
    // to avoid infinite render in useEffect i had to use state when i update component and we only get data from cookies once
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
  const URL = 'https://fakestoreapi.com/products';
  const rateUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY';
  const resRate = Api(rateUrl)
  const res = Api(URL);
  return{ props: {
    data : (await res).data,
    rate: (await resRate).data.rates
  } }
}
export default Home;