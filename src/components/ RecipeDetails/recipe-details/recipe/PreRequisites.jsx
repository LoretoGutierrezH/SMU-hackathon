import React, {useContext} from 'react'
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';

export const PreRequisites = () => {
  const contextValue = useContext(RecipeContext)
  
  return(
    <div className='pre-requisites'>
      <h4>Revisa si tienes en tu casa:</h4>
      {contextValue.loading ? 
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        : (contextValue.recipe || {} ).prerequisites
      }
    </div>
  )
}

