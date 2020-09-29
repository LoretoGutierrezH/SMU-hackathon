import React from 'react';
import { ProductsList } from './products-list/index.jsx';
import { Recipe } from './recipe/index.jsx';
import '../recipe-details/recipe-details.css';
import { RecipeContextProvider } from '../../contexts/recipe';



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
      
       <h4>Lasaña de verduras y atún</h4>
        <div className='recipe-detail-container'>
          <Recipe />
          <ProductsList />
        </div>
      </RecipeContextProvider>
    
  );
};
