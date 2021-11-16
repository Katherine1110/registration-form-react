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
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.left}>
          <div className={style.inputWrapper}>
            <img className={style.icon} src={userIcon} alt="" />
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>

          <div className={style.inputWrapper}>
            <CountrySelector />
          </div>

          <div className={style.inputWrapper}>
            <img className={style.icon} src={envelope} alt="envelope" />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className={style.inputWrapper}>
            <img className={style.icon} src={padlock} alt="" />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className={style.inputWrapper}>
            <Button className={style.formBtn} />
          </div>
        </div>

        <div className={style.right}>
          <div className={style.inputWrapper}>
            <img className={style.icon} src={usersIcon} alt="" />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>

          <div className={style.inputWrapper}>
            <img className={style.icon} src={phoneIcon} alt="phoneIcon" />
            <label className={style.phone} htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>

          <div className={style.inputWrapper}>
            <img className={style.icon} src={padlockConfirm} alt="padlockConfirm" />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div className={style.inputWrapper}>
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checkbox}
            />
            <label htmlFor="checkbox">
              I agree to the{' '}
              <a className="link" href="/">
                Terms <span>&#38;</span> Conditions
              </a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
