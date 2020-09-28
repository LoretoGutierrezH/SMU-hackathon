import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';

export const Video = () => {
  const contextValue = useContext(RecipeContext)
  
  return(
    <div className='video'>
      {contextValue.loading ? 
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        : 
        <iframe width="490" height="400" title='recipe'
  src="https://www.youtube.com/watch?v=kmNn4k4SHAU&list=PLtFYOtuLEiUUZ-6rAmCbgWNQoyMj9-UUu"></iframe>
      }
    </div>
  )
}
