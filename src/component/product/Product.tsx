import React, {FC, useEffect, useRef, useState} from 'react';
// import styles from '../../styles/Home.module.scss'
// import Link from 'next/link';
import { myProduct, useAppSelector, } from '../config/';
import {AddCartButton} from '../cart';
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import {AddToCart, Card, ImageOverlay, Areame, ProductFront, ProductImg, ProductName, ProductPrice, Stats, StatsContainer, ViewDetails} from './product.styles'



let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

interface PropsProduct {
  product : myProduct
}

const Product:FC<PropsProduct> = ({product}) => {
  // const dispatch = useAppDispatch();
  const limitString =  (length: number, str: string) => {
    return str.length > length ? str.substring(0, length) : str;
  }
  const rate = useAppSelector(state => state.rate.singleRate)
  const router = useRouter()
  return(
    <>
      <Card >
        <ProductFront>
          <ProductImg src={product.image} alt="" />
          <ImageOverlay />
          <ViewDetails 
            onClick={
              () => {
                router.push({
                  pathname: '/Product/[id]',
                  query: { id: product.id }
                })
              }  
            }
          > View Details </ViewDetails>
          <Stats>
            <StatsContainer>
              <Areame>
                <ProductPrice>{(product.price * rate['rate']).toFixed(2)} {rate['sign']}</ProductPrice>
                <ProductName>{limitString(15, product.title)}</ProductName>
              </Areame>
              
              {/* <ProductDesc>{limitString(80, product.description)}</ProductDesc> */}
              <AddToCart>Add to Cart</AddToCart>
            </StatsContainer>
          </Stats>
        </ProductFront>
      </Card>
      {/* <motion.div className={styles.card} variants={fadeInUp} whileHover={{ scale: 1.05 }}whileTap={{ scale: 0.95 }}>
        <motion.img src={product.image} alt="" initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} />
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.details}>
              <span>
                  {limitString(20, product.title)}
              </span>
            </div>
            <div className={styles.price}>{(product.price * rate['rate']).toFixed(2)} {rate['sign']}</div>
          </div>
          <div className={styles.buttons}>
              <Link 
                href='/Product/[id]'
                as={`/Product/${product.id}`}
              >
                <button>
                  View More
                </button>
              </Link>
            <AddCartButton product={product} />
          </div>
        </div>
      </motion.div> */}
    </>
  );
}

export default Product;

