import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';

export const Video = () => {
  const contextValue = useContext(RecipeContext)
  console.log("Video",contextValue);
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
        <iframe width="490" height="400" src="https://www.youtube.com/embed/BE__sj22lv8" title='recipe' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    </div>
  )
}
