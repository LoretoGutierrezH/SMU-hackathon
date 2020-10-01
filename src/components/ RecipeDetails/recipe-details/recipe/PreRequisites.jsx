import React, {useContext} from 'react'
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';
import style from "../recipe-details.module.css";


export const PreRequisites = () => {
  const contextValue = useContext(RecipeContext)
  
  return(
    <div className={style.preRequisites}>
      <h4 style={{marginTop: "3rem"}}>Revisa si tienes en tu casa:</h4>
     {/*  {contextValue.loading ?  */}
        <ul>
          <li>Orégano</li>
          <li>Aceite</li>
          <li>Sal</li>
          <li>Pimienta</li>
        </ul>
        {/* : (contextValue.recipe || {} ).prerequisites
      } */}
    </div>
  )
}

