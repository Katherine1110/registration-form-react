import React from 'react';
import { useFormik } from 'formik';
import Button from '../Button/Button';
import CountrySelector from '../CountrySearch/CountrySearch';
import userIcon from '../../icons/user.svg';
import usersIcon from '../../icons/users.svg';
import phoneIcon from '../../icons/phone.svg';
import padlock from '../../icons/padlock.svg';
import padlockConfirm from '../../icons/padlock-confirm.svg';
import envelope from '../../icons/envelope.svg';
import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      checkbox: '',
      country: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputFirstName}
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <img className={style.userIcon} src={userIcon} alt="" />

        <label className={style.firstNameLabel} htmlFor="firstName">
          First Name
        </label>
        {/* </div> */}
        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputLastName}
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder=" "
        />
        <img className={style.usersIcon} src={usersIcon} alt="" />

        <label className={style.lastNameLabel} htmlFor="lastName">
          Last Name
        </label>
        {/* </div> */}

        {/* <div className={style.wrapper}> */}
        <CountrySelector />
        {/* </div> */}

        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputPhone}
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder=" "
        />
        <img className={style.phoneIcon} src={phoneIcon} alt="phoneIcon" />

        <label className={style.phoneLabel} htmlFor="phone">
          Phone
        </label>
        {/* </div> */}

        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputPassword}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder=" "
        />
        <img className={style.padlock} src={padlock} alt="" />

        <label className={style.passwordLabel} htmlFor="password">
          Password
        </label>
        {/* </div> */}
        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputPasswordConfirm}
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder=" "
        />
        <img className={style.passwordConfirmIcon} src={padlockConfirm} alt="padlockConfirm" />

        <label className={style.passwordConfirmLabel} htmlFor="passwordConfirm">
          Confirm password
        </label>
        {/* </div> */}

        {/* <div className={style.wrapper}> */}
        <input
          className={style.inputEmail}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder=" "
        />
        <img className={style.emailIcon} src={envelope} alt="envelope" />

        <label className={style.emailLabel} htmlFor="email">
          Email
        </label>
        {/* </div> */}

        <div className={style.wrapper}>
          <input
            className={style.inputCheckbox}
            id="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.checkbox}
          />
          <span className={style.checkMark}></span>
          <label className={style.checkboxLabel} htmlFor="checkbox">
            I agree to the{' '}
            <a className={style.link} href="/">
              Terms <span>&#38;</span> Conditions
            </a>
          </label>
        </div>

        {/* <div className={style.wrapper}> */}
        <Button />
        {/* </div> */}
      </form>
    </div>
  );
};

export default RegistrationForm;
