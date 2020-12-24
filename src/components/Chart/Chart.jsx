import React, {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';
import {Pie} from 'react-chartjs-2';

import styles from './Chart.module.css';
import {getCountryData} from '../../api';

const Chart = ({country}) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        getCountryData(country).then((countryData) => {
            setDailyData(countryData[countryData.length - 1]);
        }).catch((err) => {
            console.log(err);
        });
    }, [setDailyData, country]);

    const pieChart = (<Pie data={{
        labels: ['Infected', 'Recovered', 'Deaths'], datasets: [
            {
                label: '',
                data: [
                    dailyData.Confirmed, dailyData.Recovered, dailyData.Deaths],
                backgroundColor: ['#ff525b', '#0ad837', '#3e2119'],
                fill: true
            }]
    }}/>);

    return (<div className={styles.container}>
        <Typography className={styles.title} align='center' variant="h5"
                    component="h2">Statistics of the COVID-19
            in {dailyData.Country} </Typography>
        {pieChart}
    </div>);
};

export default Chart;
