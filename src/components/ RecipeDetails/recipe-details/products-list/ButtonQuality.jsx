import React, {useState} from 'react';
import cart from '../../../../assets/cart.png';


export const ButtonQuality = () => {
const [count, setCount] = useState(0);

  return(
    <div>
      <button className='btnqty' onClick={() => setCount(count - 1)} >-</button>
      <input value={count}className='quantity' type="text"/>
      <button className='btnqty' onClick={() => setCount(count + 1)}>+</button>
      <button className='carrit' width='auto' height='70'><img alt="carrito" src={cart}/>Agregar</button>
    </div>
  );
};