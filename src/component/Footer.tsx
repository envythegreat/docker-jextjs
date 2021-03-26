import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.scss';

import {GitHub, Linkedin} from 'react-feather';


export default function Footer() {
  return(
    <>
      <footer className={`${styles.footer} ${styles.section}`}>
        <div className={`${styles.footer__container} ${styles.bd_grid}`}>
          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>ENVY</h3>
            <p className={styles.footer__deal}>Hello and Welcome</p>
          </div>
          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>Explore</h3>
            <ul>
                <li><Link href="/"><a className={styles.footer__link}>Home</a></Link></li>
                <li><Link href="/Products"><a className={styles.footer__link}>Products</a></Link></li>
                <li><Link href="/Cart"><a className={styles.footer__link}>Cart</a></Link></li>
              </ul>
          </div>
          <div className={styles.footer__box}>
            <h3 className={styles.footer__title}>Follow Me</h3>
            <ul>
                <li>
                  <a 
                    target="_blank"
                    href="https://github.com/envythegreat"
                    className={styles.footer__social}><GitHub /> </a>
                </li>
                <li>
                  <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/mohamed-habib-alouani-2b891218a/"
                    className={styles.footer__social}><Linkedin /> </a>
                </li>
              </ul>
          </div>
        </div>
        <p className={styles.footer__copy}>Alouani Mohamed Habib - ENVY</p>
      </footer>
    </>
  );
} 