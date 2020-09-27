import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.headerContainer}>
      <div className="logoContainer">
        <img src="" alt="logo de Unimarc" />
      </div>
      <section className="session">
        <p className={style.authBtn}>Ingresa</p>
        <p className={style.authBtn}>Regístrate</p>
      </section>
    </header>
  );
}

export default Header;