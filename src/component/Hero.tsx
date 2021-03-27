import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.scss';


function Hero() {
  return (
    <>
      <div className={styles.home} id="Home">
        <div className={`${styles.home__container} ${styles.bd_grid}`}>
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>
              NEW<br /><span>ARRIVALS</span>
            </h1>
            <Link href="/Products"><a className={styles.button}>GO SHOPPING</a></Link>
          </div>
          
          <img src="./images/home.png" alt="pp" className={styles.home__img} />
        </div>
      </div>
    </>
  );
}
export default Hero;