import React from 'react';
import style from './Footer.module.css';
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import phone from '../../assets/phone.png'

 

const Footer = (props) => {
  return (
    <footer className={style.footerContainer}>
      <div>
        <h4> LOGO DE UNIMARC</h4>
        <p>Servicio al Cliente</p>
        <p> Consultas, Reclamos y Sugerencias</p>
        <p> <span className="iconify" data-icon="ant-design:phone-filled" data-inline="false"></span> 600 600 0025</p>
        <p> contacto.unimarc@unimarc.cl</p>

      </div>
      <div>
        <p> Síguenos en:</p>
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
      <div> 
      <p>Revisa nuestras:</p>
      <p> Base Legales</p>
      <p> Tarjeta Unimarc</p>
      <p> Unired</p>

      </div>
    </footer>
  );
}

export default Footer;