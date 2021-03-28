import '../styles/globals.css';
import React, {FC, useState} from 'react';
import {AppProps} from 'next/app';
import {Header, Footer} from '../component/';
import { store } from '../component/config/redux/store';
import { Provider } from 'react-redux';
import {Rate} from '../component/'

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Provider store={store}>
        <Header />
          <Rate />
          <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
export default MyApp;