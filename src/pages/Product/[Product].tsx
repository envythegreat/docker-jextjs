
import React,{FC, useEffect, useState} from 'react';
import {AddCartButton} from '../../component/cart';
import {addRates, getCurrency, getRates, myProduct, setRate, useAppSelector } from '../../component/config';
import styles from '../../styles/Home.module.scss';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';

interface Props {
  product: myProduct
}

const Product:FC<Props> = ({product}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setRate(getCurrency()))
    dispatch(addRates(getRates()))
  })

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
        <section className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <div className={styles.main}>
                
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className={styles.right}>
              
              <h1> {product.title} </h1>
              
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
              <p> {product.description} </p>
            </div>
          </div>
        </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data = query.Product
  data = JSON.stringify(data)
  console.log(data)
  return {
    props :{
      product: JSON.parse(JSON.parse(data))
    }
  }
}
export default Product;




// import { useRouter } from 'next/router'

// const Product = () => {
//   const router = useRouter()
//   let data = router.query.Product
//   data = JSON.stringify(data)
//   console.log(JSON.parse(JSON.parse(data)))
//   return <p>Post: a</p>
// }

// export default Product