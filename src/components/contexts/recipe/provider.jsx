import React, { useState, useEffect } from 'react';
import {RecipeContext} from './contexts';
import {getRecipe} from '../../services/recipes';


export const RecipeContextProvider = ({children}) =>{
  
  const [state, setState] = useState ({
    recipe:undefined,
    loading:false
  });

  const value = {
    recipe:state.recipe,
    loading:state.loading
  }

  useEffect(()=>{
    fetchRecipe();
  }, [])

  const fetchRecipe = async () =>{ // creamos la función fetchRecipe asincrona
    setState((prevState)=>{
      return({
        ...prevState,
        loading:true // inadicamos que esta cargando datos
      })
    })

    const recipe = await getRecipe(2) // obtenemos los datos
    setState((prevState)=>{
      return({
        ...prevState,
        recipe:recipe, //guardamos los datos 
        loading:false // datos ya cargados
      })
    })
  } 
  return(
    <RecipeContext.Provider value={value}>
      {children}
    </ RecipeContext.Provider>
  );
}