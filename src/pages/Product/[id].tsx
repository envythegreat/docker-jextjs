
import React,{FC, useEffect, useState} from 'react';
import {AddCartButton} from '../../component/cart';
import {addRates, Api, getCurrency, getRates, myProduct, setRate, useAppDispatch, useAppSelector } from '../../component/config';
import styles from '../../styles/Home.module.scss';
import { GetServerSideProps } from 'next';
import { GobackButton, LeftGridProduct, ProductBody, ProductContainer, ProductHeader, ProductImg, QuantImg, Quantity, RightGridProduct, TotalContainer } from './productdetails.style';
import {ChevronLeft, ChevronRight} from 'react-feather'

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

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

interface Props {
  product: myProduct
}

const Product:FC<Props> = ({product}) => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setRate(getCurrency()))
    dispatch(addRates(getRates()))
  },[])

  const [quantity, setQuantity] = useState(1);
  const addOne = () => setQuantity(quantity + 1);
  const minusOne = () => setQuantity(quantity - 1);
  const rate = useAppSelector(state => state.rate.singleRate)

    const myPro = {
      id: product.id,
      image: product.image,
      title: product.title,
      description : product.description,
      price: product.price,
      Quantity : quantity
    }
  return(
    <>
      <ProductContainer>
        {/* <ProductHeader>
          <GobackButton />
        </ProductHeader> */}
        <ProductBody>
          <LeftGridProduct>
            <h2>{product.title}</h2>
            <h3>{(product.price * rate['rate']).toFixed(2)} {rate['sign']}</h3>
            <ProductImg src={product.image} alt="" />
          </LeftGridProduct>
          <RightGridProduct>
            <p>{product.description}</p>
            <Quantity>
              QUANTITY
              <ChevronLeft  onClick={quantity == 0 ? null : minusOne}  color="#d8d8d8" style={{cursor: 'pointer'}} />
                <span>{quantity}</span>
              <ChevronRight onClick={addOne} color="#d8d8d8" style={{cursor: 'pointer'}} />
            </Quantity>
            <TotalContainer>
              <div>
                <p>{((product.price * rate['rate']) * quantity).toFixed(2)} {rate['sign']}</p>
              </div>
              <div>
                <AddCartButton product={myPro} />
              </div>
            </TotalContainer>
          </RightGridProduct>
        </ProductBody>
      </ProductContainer>
        {/* <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <motion.div className={styles.main} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                <motion.img 
                  src={product.image} alt="" 
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 200, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            </div>
            <div className={styles.right}>
              
              <motion.h1 variants={fadeInUp}> {product.title} </motion.h1>
              
              <div className={styles.price}> {(product.price * rate['rate']).toFixed(2)} {rate['sign']} </div>
              <div className={styles.quan__area}>
                <div className={styles.quantity}>
                  <button className={styles.minus_btn} type="button" name="button" onClick={minusOne}>
                    <img src="../images/minus.svg" alt="" />
                  </button>
                  <input type="text" name="name" value={quantity} onChange={() => null} />
                  <button className={styles.plus_btn} type="button" name="button" onClick={addOne}>
                    <img src="../images/plus.svg" alt="" />
                  </button>
                </div>
                <AddCartButton product={myPro} />
              </div>
              <h3>Product Description</h3>
              <motion.p variants={fadeInUp}> {product.description} </motion.p>
            </div>
          </div>
        </motion.div> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query;
  const product = Api('Product', Number(id))
  return {
    props :{
      product: (await product).data
    }
  }
}
export default Product;
