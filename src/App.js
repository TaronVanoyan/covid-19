import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import {getCovidData} from './api';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: 'Armenia'
    };

    componentDidMount() {
        getCovidData().then((data) => {
            this.setState({data});
        }).catch((err) => {
            console.log(err);
        });
    }

    countryChange = (country) => {
        this.setState({country});
    };

    render() {
        const {data, country} = this.state;

        return (<div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker countryChange={this.countryChange}
                           country={country}/>
            <Chart country={country}/>
        </div>);
    }
}

export default App;
