import React from 'react';
import qrcode from '../../../../assets/qrcode.png'

export const InterativeQr = () => {
  return(
    <div className='interactive-qr'>
      Quieres realizar tu compra presencial, <p className='qrcode'>descarga aqui la lista de ingredientes.</p>
      <img className='qrcode' src={ qrcode } alt="qrcode" /> 
    </div>
  )
}