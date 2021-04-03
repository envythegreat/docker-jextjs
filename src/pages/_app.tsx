import '../styles/globals.css';
import styles from '../styles/Home.module.scss'
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {Header, Footer} from '../component/';
import { store } from '../component/config/redux/store';
import { Provider } from 'react-redux';
import {Rate} from '../component/'
import {AnimatePresence} from 'framer-motion'

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <div className={styles.contain}>
          <Header />
            <Rate />
            <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </AnimatePresence>
  );
}
export default MyApp;