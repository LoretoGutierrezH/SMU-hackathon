import React from 'react'
import like from '../../../../assets/like.png';
import cutlery from '../../../../assets/cutlery.png';
import watch from '../../../../assets/watch.png';

export const Info = () => {
  return(
    <div className='info'>
     <img src={ watch } alt="facebook" width="30px" height="30px"/><p>40 Minutos</p>
     <img src={ cutlery } alt="facebook" width="30px" height="30px"/><p> 4 Personas</p>
     <img src={ like } alt="facebook" width="30px" height="30px"/><p>26</p>
    </div>
  )
}