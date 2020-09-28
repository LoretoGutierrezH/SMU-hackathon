import React from 'react'
import like from '../../../../assets/like.png';
import cutlery from '../../../../assets/cutlery.png';
import watch from '../../../../assets/watch.png';

export const Info = () => {
  return(
    <div className='info'>
     <img className='watch' src={ watch } alt="facebook" /><p>40 Minutos</p>
     <img className='cutlery' src={ cutlery } alt="facebook" /><p> 4 Personas</p>
     <img className='like' src={ like } alt="facebook" /><p>26</p>
    </div>
  )
}