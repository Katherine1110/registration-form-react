import style from './Footer.module.css';
import React from 'react';

function Footer() {
  return (
    <p className={style.footer}>
      If you have an account,{' '}
      <a className={style.footerLink} href="/">
        Log In
      </a>
    </p>
  );
}

export default Footer;
