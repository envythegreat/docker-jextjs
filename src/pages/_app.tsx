import '../styles/globals.css';
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { store } from '../component/config/store';
import { Provider } from 'react-redux';

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Provider store={store}>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
export default MyApp;