import Head from 'next/head';
import React, { FC } from 'react';
import styles from '../styles/Home.module.scss';
import Hero from '../component/Hero';
import ProductList from '../component/product/ProductList';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {addProducts, Api, useAppDispatch} from '../component/config/';
import Cookies from 'js-cookie'



interface Props {
  data: []
}


const Home:FC<Props> = ({data}) => {
  const dispatch = useAppDispatch();
  dispatch(addProducts(data));
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
  const res = Api(URL);
  return{ props: {data : (await res).data} }
}
export default Home;