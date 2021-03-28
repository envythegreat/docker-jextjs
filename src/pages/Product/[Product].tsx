
import React,{FC, useEffect, useState} from 'react';
import {AddCartButton} from '../../component/cart';
import {useAppSelector } from '../../component/config';
import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router'


const Product:FC = () => {

  const router = useRouter()
  let data = router.query.Product
  data = JSON.stringify(data)
  const myP = JSON.parse(JSON.parse(data))
  const [quantity, setQuantity] = useState(1);
  const addOne = () => setQuantity(quantity + 1);
  const minusOne = () => setQuantity(quantity - 1);
  const rate = useAppSelector(state => state.rate.singleRate)
  return(
    <>
        <section className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <div className={styles.main}>
                
                <img src={myP.image} alt="" />
              </div>
            </div>
            <div className={styles.right}>
              
              <h1> {myP.title} </h1>
              
              <div className={styles.price}> {(myP.price * rate['rate']).toFixed(2)} {rate['sign']} </div>
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
                <AddCartButton product={myP} />
              </div>
              <h3>Product Description</h3>
              <p> {myP.description} </p>
            </div>
          </div>
        </section>
    </>
  );
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