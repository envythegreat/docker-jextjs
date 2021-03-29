import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import {
  addRates,
  getRates,
  handleCurneccy,
  setRate,
  useAppDispatch,
  useAppSelector
} from './config';




 
const Rate:FC= () => {
  useEffect(() =>{
    dispatch(addRates(getRates()))
  },[])
  const rates = useAppSelector(state => state.rate.rates);
  const rate = useAppSelector(state => state.rate.singleRate)
  const [poPup, setPopup] = useState(false);
  const dispatch = useAppDispatch();
  const getCurrency = (str: string) => {
    setPopup(false)
    switch (str) {
      case '$':
        dispatch(setRate({rate: 1,sign: '$'}))
        handleCurneccy(1, '$')
        break;
      case '€':
        dispatch(setRate({rate: rates['EUR'],sign: '€'}))
        handleCurneccy(rates['EUR'], '€')
        break;
      case '¥':
        dispatch(setRate({rate: rates['JPY'],sign: '¥'}))
        handleCurneccy(rates['JPY'], '¥')
        break;
      case '£':
        dispatch(setRate({rate: rates['GBP'],sign: '£'}))
        handleCurneccy(rates['GBP'], '£')
      default:
        break;
    }
  }

  return (
    <>
      <div className={styles.rate__Popup} 
           onClick={() => {setPopup(true)}}
           style={poPup ? {display: 'none'} : {display: 'flex'}} >
        <span>{rate['sign']}</span>
      </div>
      <div className={styles.currency_signs}
           style={poPup ? {display: 'grid'} : {display: 'none'}}
      >
        <button onClick={() => getCurrency('¥')}>¥</button>
        <button onClick={() => getCurrency('$')}>$</button>
        <button onClick={() => getCurrency('€')}>€</button>
        <button onClick={() => getCurrency('£')}>£</button>
      </div>
    </>
  );
}

export default Rate;