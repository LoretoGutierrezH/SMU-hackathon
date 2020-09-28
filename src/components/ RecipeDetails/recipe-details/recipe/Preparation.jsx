import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';

export const Preparation = () => {
  const contextValue = useContext(RecipeContext)
  
  return(
    <div className='preparation'>
      <h4>Preparación:</h4>
      {contextValue.loading ? 
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        : (contextValue.recipe || {} ).preparation
      }
    </div>
  )
}