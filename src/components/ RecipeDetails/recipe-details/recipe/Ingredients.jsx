import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';
import style from "../recipe-details.module.css";

export const Ingredients = () => {
  const {
    loading,
    recipe={} //prevenimos que la variable recipe sea undefine
  } = useContext(RecipeContext) 
  return (
    <div className={style.ingredients}>
      <div className={style.heading}>
        <h4>Ingredientes:</h4>
      </div>
      {loading ? (
        <div style={{ width: "100%" }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul>
          {(recipe.ingredients || []).map((ingredient) => {
            //prevenimos que la  variable ingredient sea undefine
            return <li> {ingredient.name} </li>;
          })}
        </ul>
      )}
    </div>
  );
}