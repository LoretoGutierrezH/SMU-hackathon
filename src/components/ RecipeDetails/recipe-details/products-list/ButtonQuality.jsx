import React, {useState} from 'react';
import cart from '../../../../assets/cart.png';
import style from "../recipe-details.module.css";


export const ButtonQuality = () => {
const [count, setCount] = useState(0);

  return(
    <div>
      <button className={style.btnqty} onClick={() => setCount(count - 1)} >-</button>
      <input value={count} className={style.quantity} type="text"/>
      <button className={style.btnqty} onClick={() => setCount(count + 1)}>+</button>
      <button className={style.carrit} width='auto' height='70'><img alt="carrito" src={cart}/>Agregar</button>
    </div>
  );
};