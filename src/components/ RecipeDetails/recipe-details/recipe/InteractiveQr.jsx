import React from 'react';
import qrcode from '../../../../assets/codigo-qr.jpeg'
import style from "../recipe-details.module.css";

export const InterativeQr = () => {
  return (
    <div className={style.interactiveQr}>
      Quieres realizar tu compra presencial,{" "}
      <p className={style.qrcode}>descarga aqui la lista de ingredientes.</p>
      <div style={{ width: "10rem", margin: "0 auto" }}>
        <img style={{width: "100%"}} className={style.qrcode} src={qrcode} alt="qrcode" />
      </div>
    </div>
  );
}