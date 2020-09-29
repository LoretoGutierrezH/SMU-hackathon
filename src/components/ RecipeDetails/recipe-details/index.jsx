import React from 'react';
import { ProductsList } from './products-list/index.jsx';
import { Recipe } from './recipe/index.jsx';
import { RecipeContextProvider } from '../../contexts/recipe';
import style from './recipe-details.module.css';



export const RecipeDetails = () => {
  // Title
  // { video, interactive qr, ingredients}
  // info
  //social media
  // prerequisite
  // preparation

  // products list

  return (
    
      <RecipeContextProvider>
      
       <h4 style={{fontFamily: "clarendonFamily",
    marginLeft: "3rem", marginTop: "2rem"}}>Lasaña de verduras y atún</h4>
        <div className={style.recipeDetailContainer}>
          <Recipe />
          <ProductsList />
        </div>
      </RecipeContextProvider>
    
  );
};
