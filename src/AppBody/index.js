import React from 'react';
import axios from 'axios';

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

  return ( !!data.length &&
    data.map((country, index) => {
        return (
            <div key={index}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.name.common} />
            </div>
        )
    }
  ) );
}

export { AppBody };