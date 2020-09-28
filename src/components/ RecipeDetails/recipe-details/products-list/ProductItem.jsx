import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';
import cart from '../../../../assets/cart.png'

export const ProductItem = () => {
   const {
    loading,
    recipe={} //prevenimos que la variable recipe sea undefine
  } = useContext(RecipeContext) 
  return(
    <div className='product-item'>
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
                <div>
                  <button className='btnqty' >-</button>
                  <input className='quantity' type="text"/>
                  <button className='btnqty'>+</button>
                  <button className='carrit' width='auto' height='70'><img alt="carrito" src={cart}/>Agregar</button>
                </div>
              </div>                
              })}
          </ul>}
      
    </div>
  )
}