import React from 'react';
import {ProductItem} from '../products-list/ProductItem'


export const ProductsList = () =>{
  return(
    <div className='products-list-container'>
      <h4>
       <ProductItem />
      </h4>
    </div>
  );
};