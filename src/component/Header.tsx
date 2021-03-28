
import React, {useState} from 'react'
import styles from '../styles/Home.module.scss';
import Link from 'next/link'
import {Menu, ShoppingCart} from 'react-feather';
function Header() {

  const [open, setOpen] = useState(false)
  const handleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <header className={styles.l_header}>
        <nav className={`${styles.nav} ${styles.bd_grid} `}>
          <div>
            <Link href="/"><a className={styles.nav__logo}>ENVY</a></Link>
          </div>
          <div className={styles.nav__menu} style={open ? {right: 0} : {right: '-100%'}}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}><Link href="/"><a className={styles.nav__link} onClick={closeMenu}>Home</a></Link></li>
              <li className={styles.nav__item}><Link href="/Products"><a className={styles.nav__link} onClick={closeMenu}>Products</a></Link></li>
              {/* <li className={styles.nav__item}><Link href="/Product"><a className={styles.nav__link} onClick={closeMenu}>Product</a></Link></li> */}
              {/* <li className={styles.nav__item}><Link href="/Product"><a className={styles.nav__link} onClick={closeMenu}>Cart</a></Link></li> */}
            </ul>
          </div>
          <div style={{display: 'flex'}}>
            {/* <Link href="/Cart"><ShoppingCart className={styles.nav__cart}/></Link> */}
              <div className={styles.cart__nav}>
                <div className={styles.icon}>
                  <Link href="/Cart"><ShoppingCart/></Link>
                </div>
              </div>
            <Menu className={styles.nav__toggle} onClick={handleMenu} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header