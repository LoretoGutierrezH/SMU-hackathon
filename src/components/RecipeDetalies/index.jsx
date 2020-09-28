import React from 'react';
import { Video } from './Video';
import { InterativeQr } from './InteractiveQr';
import { Ingredients } from './Ingredients';
import { Info } from './Info';
import { SocialMedia } from './SocialMedia';
import { PreRequisites } from './PreRequisites';
import { Preparation } from './Preparation';

export const Recipe = () => {
  return (
    <div className='recipe-container'>
      <div className='header-recipe'>
        <Video />
        <div className='right-container'>
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