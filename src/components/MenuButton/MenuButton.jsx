import React, { useState }from 'react';
import style from './MenuButton.module.css';

const MenuButton = (props) => {
  return (
    <section>
      <button onClick={() => props.clicked()} className={style.menuBtn}>
        Menú <span className={style.chevron}>&#x2304;</span>
      </button>
    </section>
  );
}

export default MenuButton;