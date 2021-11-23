import React from 'react';
import logo from '../../icons/bestRest.svg';
import style from './Header.module.css';
function Header() {
  return (
    <div className={style.logo}>
      <img className={style.logoImg} src={logo} alt="" />
      <p className={style.title}>
        <a className={style.link} href="/">
          Sign Up
        </a>{' '}
        and find the best place to rest while traveling
      </p>
    </div>
  );
}

export default Header;
