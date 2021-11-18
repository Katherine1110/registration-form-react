import style from './Footer.module.css';

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
