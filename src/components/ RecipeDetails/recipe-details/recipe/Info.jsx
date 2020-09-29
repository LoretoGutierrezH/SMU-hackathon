import React from 'react'
import like from '../../../../assets/like.png';
import cutlery from '../../../../assets/cutlery.png';
import watch from '../../../../assets/watch.png';
import style from "../recipe-details.module.css";

export const Info = () => {
  return(
    <div className={style.info}>
     <img className={style.watch} src={ watch } alt="facebook" /><p>30 Minutos</p>
     <img className={style.cutlery} src={ cutlery } alt="facebook" /><p> 4 Personas</p>
     <img className={style.like} src={ like } alt="facebook" /><p>26</p>
    </div>
  )
}