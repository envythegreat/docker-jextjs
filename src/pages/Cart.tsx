import React, {FC, useEffect, useState} from 'react';
import { getCookies, myProduct, useAppDispatch, useAppSelector } from '../component/config';
import styles from '../styles/Home.module.scss';
import {CartProduct} from '../component/cart';
import { getTotalAmount } from '../component/config/store';

// interface myStates {
//   data: any
//   total: number
// }

const Cart:FC = () => {
  const [data, setData] = useState('')
  const dispatch = useAppDispatch();
  useEffect(() => {
    let datas = getCookies();
    let total = 0;
    
    setData(datas.map( (item:myProduct)=> {
      total += item.price * item.Quantity;
      return <CartProduct product={item} key={item.Quantity * Math.random()} />
    }))
    dispatch(getTotalAmount(total))
  }, [])
  const redux_Total =  useAppSelector(state => state.products.totalAmount) 
  return (
    <>
    <div className={styles.maons}>
      <div className={styles.shopping_cart}>
      <div className={styles.title__cart}>
        Shopping Bag
      </div>
      {data}
      <div className={styles.amount__cart}>
        <span>Total amount : </span>
        <span>{redux_Total.toFixed(2)} $</span>
      </div>
    </div>
    </div>
    </>
  );
}

// class Cart extends Component<any , myStates>{
//   constructor(){
//     //@ts-ignore
//     super();
//     this.state = {
//       data: '',
//       total: 0
//     }
//     this.updateTotal = this.updateTotal.bind(this);
//   }

//   updateTotal = (price: number) => this.setState({total: this.state.total - price}) 

//   async componentDidMount() {
//     let datas = getCookies();
//     let total = 0;
//     const dispatch = useAppDispatch();
// //     this.setState({
//       data: datas.map( (item:myProduct)=> {
//         total += item.price * item.Quantity;
//         return <CartProduct updateTotal={this.updateTotal} product={item} key={item.Quantity * Math.random()} />
//       })

//     dispatch(getTotalAmount(total))
//     // this.setState({total: total})
//   }
//   redux_Total = useAppSelector(state => state.products.totalAmount)
//   render(){ 

//   }
// }

export default Cart;
