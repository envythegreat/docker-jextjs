import *  as React from 'react';;
import styles from '../styles/Home.module.scss';

interface ProductProps{
  productImg: string;
  productPrice: number;
  productDesc: string;
  productTite: string;
}

const Product:React.FC<ProductProps> = ({productImg, productPrice, productDesc, productTite}) => {
  return(
    <>
        <section className={`${styles.section} ${styles.product_detail}`}>
          <div className={`${styles.details}`}>
            <div className={styles.left}>
              <div className={styles.main}>
                <img src="./images/head.png" alt="" />
              </div>
            </div>
            <div className={styles.right}>
              <h1>Black Headphone</h1>
              <div className={styles.price}>$50</div>
              <div className={styles.quan__area}>
                <div className={styles.quantity}>
                  <button className={styles.minus_btn} type="button" name="button">
                    <img src="./images/minus.svg" alt="" />
                  </button>
                  <input type="text" name="name" value="1" />
                  <button className={styles.plus_btn} type="button" name="button">
                    <img src="./images/plus.svg" alt="" />
                  </button>
                </div>
                <button className={styles.addcart__btn}>Add To Cart</button>
              </div>
              <h3>Product Description</h3>
              <p>Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates</p>
            </div>
          </div>
        </section>
    </>
  );
}
export default Product;;