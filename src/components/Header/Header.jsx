import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = (props) => {
  return (
    <header className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo de Unimarc" />
      </div>
      <section className={style.session}>
        <p className={style.authBtn}>Ingresa</p>
        <p className={style.authBtn}>Regístrate</p>
      </section>
    </header>
  );
}

export default Header;