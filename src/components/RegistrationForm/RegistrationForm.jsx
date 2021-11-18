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
    <div className="wrapper">
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputWrapper}>
          <img className={style.icon} src={userIcon} alt="" />
          <input
            className={style.input}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label className={style.inputLabel} htmlFor="firstName">
            First Name
          </label>
        </div>
        <div className={style.inputWrapper}>
          <img className={style.icon} src={usersIcon} alt="" />
          <input
            className={style.input}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder=" "
          />
          <label className={style.inputLabel} htmlFor="lastName">
            Last Name
          </label>
        </div>

        <CountrySelector />

        <div className={style.inputWrapper}>
          <img className={style.icon} src={phoneIcon} alt="phoneIcon" />
          <input
            className={style.input}
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder=" "
          />
          <label className={style.inputLabel} htmlFor="phone">
            Phone
          </label>
        </div>

        <div className={style.inputWrapper}>
          <img className={style.icon} src={padlock} alt="" />
          <input
            className={style.input}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder=" "
          />
          <label className={style.inputLabel} htmlFor="password">
            Password
          </label>
        </div>
        <div className={style.inputWrapper}>
          <img className={style.icon} src={padlockConfirm} alt="padlockConfirm" />
          <input
            className={style.input}
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder=" "
          />
          <label className={style.inputLabel} htmlFor="passwordConfirm">
            Confirm password
          </label>
        </div>

        <div className={style.inputWrapper}>
          <img className={style.icon} src={envelope} alt="envelope" />
          <input
            className={style.input}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder=" "
          />
          <label className={style.inputLabel} htmlFor="email">
            Email
          </label>
        </div>

        <div className={style.inputWrapper}>
          <input
            className={style.input}
            id="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.checkbox}
          />
          <label className={style.inputLabel} htmlFor="checkbox">
            I agree to the{' '}
            <a className="link" href="/">
              Terms <span>&#38;</span> Conditions
            </a>
          </label>
        </div>

        <Button />
      </form>
    </div>
  );
};

export default RegistrationForm;
