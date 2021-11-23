import React from 'react';
import style from './Button.module.css';
function Button() {
  return (
    <button className={style.btn} type="submit">
      Sign Up
    </button>
  );
}

export default Button;
