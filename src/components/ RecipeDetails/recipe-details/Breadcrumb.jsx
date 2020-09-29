import React, {useContext} from 'react'
import { Breadcrumb as BsBreadcrumb } from 'react-bootstrap';
import { RecipeContext } from '../../../contexts/recipe'

export const Breadcrumb = () =>{
  const valueContext = useContext(RecipeContext);
  return(
    <BsBreadcrumb>
      <BsBreadcrumb.Item href="/">Home</BsBreadcrumb.Item>
      <BsBreadcrumb.Item href="/recipe/">
        Recetas
      </BsBreadcrumb.Item>
      <BsBreadcrumb.Item>{(valueContext.recipe || {}).category}</BsBreadcrumb.Item>
    </BsBreadcrumb>
  );
};