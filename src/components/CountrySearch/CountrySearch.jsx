import locationIcon from '../../icons/map-marker.svg';
import arrow from '../../icons/arrow.svg';
import style from './CountrySearch.module.css';
import countries from '../../data/country';
import React, { useState } from 'react';

function CountrySelector() {
  const [name, setName] = useState('');
  const [foundCountry, setFoundCountry] = useState(countries);
  const [isActive, setActive] = useState('true');
  console.log(name);

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

  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <div className={style.searchWrapper}>
      <img className={style.icon} src={locationIcon} alt="locationIcon" />
      <label htmlFor="name">Country</label>
      <input type="search" id="name" value={name} onChange={filter} className="input" />

      <img className={style.arrow} onClick={handleToggle} src={arrow} alt="arrow" />

      <div className={isActive ? 'hidden' : 'shown'}>
        <ul className={style.countriesList}>
          {foundCountry && foundCountry.length > 0 ? (
            foundCountry.map((country) => {
              return (
                <li id="id" key={country.id}>
                  {country.text}
                </li>
              );
            })
          ) : (
            <li>Country</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CountrySelector;
