import React from 'react';
import {ProductItem} from '../products-list/ProductItem'
import style from "../recipe-details.module.css";


export const ProductsList = () =>{
  return(
    <div className={style.productsListContainer}>
      <h4>
       <ProductItem />
      </h4>
    </div>
  );
};