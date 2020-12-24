import axios from 'axios';

// Api URLs
const api = 'https://api.covid19api.com';
const api2 = 'https://covid19.mathdro.id/api';

export const getCovidData = async () => {
    const response = await axios.get(`${api}/summary`);
    return {
        confirmed: response.data.Global['TotalConfirmed'],
        recovered: response.data.Global['TotalRecovered'],
        deaths: response.data.Global['TotalDeaths'],
        lastUpdate: response.data.Date,
    };
};

export const getCountryData = async (countryName) => {
    const {data} = await axios.get(`${api}/total/country/${countryName}`);
    return data;
};

export const getCountries = async () => {
    const {data: {countries: countries}} = await axios.get(`${api2}/countries`);
    return countries;
};
