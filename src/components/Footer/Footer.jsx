import React from 'react';
import style from './Footer.module.css';
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import phone from '../../assets/phone.png'
import logoFooter from '../../assets/logo-footer.png'

 

const Footer = (props) => {
  return (
    <footer className={style.footerContainer}>
      <div>
        <div>
          <img src = {logoFooter}></img>
        </div>
        <p>Servicio al Cliente</p>
        <p> Consultas, Reclamos y Sugerencias</p>
        <p> <span className="iconify" data-icon="ant-design:phone-filled" data-inline="false" data-rotate="90deg"></span> 600 600 0025</p>
        <p> contacto.unimarc@unimarc.cl</p>

      </div>
      <div className={style.containP}>
      <p> Síguenos en:</p>
      <div className = {style.socialContain}>
       
        <div className={style.socialNetworks}>
        <img src ={instagram}></img>
        </div>
        <div className={style.socialNetworks}>
        <img src ={facebook}></img>
        </div>
        <div className={style.socialNetworks}>
        <img src ={twitter}></img>
        </div>


      </div>
                
      </div>
      <div className={style.extraInfo}> 
      <p>Revisa nuestras:</p>
      <p> Base Legales</p>
      <p> Tarjeta Unimarc</p>
      <p> Unired</p>

      </div>
    </footer>
  );
}

export default Footer;