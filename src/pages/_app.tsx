import '../styles/globals.css';
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {Header, Footer} from '../component/';
import { store } from '../component/config/';
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