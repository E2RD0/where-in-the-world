import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./AppBody.css";

function AppBody() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
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
    
    <Grid container spacing={3} xs={12}>
        {getElements}
    </Grid>
    );
}

export { AppBody };