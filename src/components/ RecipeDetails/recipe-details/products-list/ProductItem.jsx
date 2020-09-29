import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';
import { ButtonQuality } from './ButtonQuality';
import style from "../recipe-details.module.css";

export const ProductItem = () => {
   const {
    loading,
    recipe={} //prevenimos que la variable recipe sea undefine
  } = useContext(RecipeContext) 
  return(
    <div className={style.productItem}>
  <h4>Ingredientes:</h4>
        { loading ?
        <div style={{width:'100%'}}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
          : <ul>
            {(recipe.ingredients || [] ).map((ingredient) => { //prevenimos que la  variable ingredient sea undefine
              return <div> 
                <div>
                  {<img src={ ingredient.img } alt="item" width='auto' height="80"/>}
                </div>
                <div>
                  <p>{ingredient.name}</p>
                  <p> $ {ingredient.cost}</p>
                </div> 
                <ButtonQuality />
              </div>                
              })}
          </ul>}
      
    </div>
  )
}