import React from 'react';
import { Video } from './Video';
import { InterativeQr } from './InteractiveQr';
import { Ingredients } from './Ingredients';
import { Info } from './Info';
import { SocialMedia } from './SocialMedia';
import { PreRequisites } from './PreRequisites';
import { Preparation } from './Preparation';
import style from "../recipe-details.module.css";

export const Recipe = () => {
  return (
    <div className={style.recipeContainer}>
      <div className={style.headerRecipe}>
        <Video />
        <div className={style.rightContainer}>
          <InterativeQr />
          <Ingredients />
        </div>
      </div>
      <Info />
      <SocialMedia />
      <PreRequisites /> 
      <Preparation />
    </div>
  );
};