import locationIcon from '../../icons/map-marker.svg';
import arrow from '../../icons/arrow.svg';
import style from './CountrySearch.module.css';
import countries from '../../data/country';

import React, { useEffect, useState } from 'react';
import country from '../../data/country';

function CountrySelector() {
  const [name, setName] = useState('');
  const [foundCountry, setFoundCountry] = useState(countries);
  const [isActive, setActive] = useState('false');
  // console.log(name);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const result = countries.filter((country) => {
        return country.text.toLowerCase(keyword).startsWith(keyword);
      });
      setFoundCountry(result);
    }
    setName(keyword);
  };

  const handleClick = (e) => {
    let target = e.target;
    setName(target.innerHTML);
    setActive(!isActive);
  };

  const handleToggle = () => {
    setActive(!isActive);
    // console.log(isActive);
  };

  return (
    <>
      <input
        className={style.countryInput}
        type="text"
        id="name"
        value={name}
        onChange={filter}
        onClick={handleToggle}
      />

      <img className={style.locationIcon} src={locationIcon} alt="locationIcon" />
      <label className={style.countryLabel} htmlFor="name">
        Country
      </label>
      <img className={style.arrow} onClick={handleToggle} src={arrow} alt="arrow" />
      <ul className={`${style.countriesList} ${isActive ? style.hidden : style.active}`}>
        {foundCountry && foundCountry.length > 0 ? (
          foundCountry.map((country) => {
            return (
              <li className={style.listItem} key={country.id} onClick={handleClick}>
                {country.text}
              </li>
            );
          })
        ) : (
          <li>Wrong choice :(</li>
        )}
      </ul>
    </>
  );
}

export default CountrySelector;
