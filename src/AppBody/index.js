import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./AppBody.css";
import { SearchBar } from '../SearchBar';

function AppBody() {
    const [data, setData] = React.useState([]);

    const getCountries = (filter) => {
        axios.get(`https://restcountries.com/v3.1/${filter}`)
        .then(function (response) {
            // handle success
            setData(response.data);
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    React.useEffect(() => {
        getCountries("all");
    }, []);

    const getElements = data.map((country, index) => {
        return (
            <Grid key={index} item xs={3}>
                <Link  to={`/countries/${country.cca2}`} className="country-link">
                    <h1>{country.name.common}</h1>
                    <img src={country.flags.png} alt={country.name.common} />
                </Link>
            </Grid>
        )
    });

  return ( !!data.length &&
    <>
        <SearchBar getCountries={getCountries}/>
        <Grid container spacing={3} xs={12}>
            {getElements}
        </Grid>
    </>
    );
}

export { AppBody };