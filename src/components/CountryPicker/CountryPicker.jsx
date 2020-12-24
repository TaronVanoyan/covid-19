import React, {useEffect, useState} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {getCountries} from '../../api';

const CountryPicker = ({countryChange, country}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then((countries) => {
            setCountries(countries);
        }).catch((err) => {
            console.log(err);
        });
    }, [setCountries]);

    return (<FormControl className={styles.container}>
        <NativeSelect defaultValue={country}
                      onChange={(e) => countryChange(e.target.value)}>
            <option value={country}>{country}</option>
            {countries && countries.map((country, index) => {
                return <option key={index}
                               value={country.name}>{country.name}</option>;
            })}
        </NativeSelect>
    </FormControl>);
};

export default CountryPicker;
