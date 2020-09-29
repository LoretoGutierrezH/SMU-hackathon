import React from 'react';
import qrcode from '../../../../assets/qrcode.png'
import style from "../recipe-details.module.css";

export const InterativeQr = () => {
  return(
    <div className={style.interactiveQr}>
      Quieres realizar tu compra presencial, <p className={style.qrcode}>descarga aqui la lista de ingredientes.</p>
      <img className={style.qrcode} src={ qrcode } alt="qrcode" /> 
    </div>
  )
}