
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function Country(){
    let params = useParams();
    const [data, setData] = React.useState([]);
    React.useEffect( ()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
        .then(function (response) {
            // handle success
            setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }, [])
    return ( !!data.length &&
        <div>
            <h1>{data[0].name.common} </h1>
        </div>
    );
}

export {Country};