import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

function SearchBar(props){
    const  {getCountries} = props;
    const [region, setRegion] = React.useState('');
    const handleChange = (event) => {
        setRegion(event.target.value);
        getCountries("region/" + event.target.value);
    }
    return(
        <FormControl>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          onChange={handleChange}
        >
          <MenuItem value={"africa"}>Africa</MenuItem>
          <MenuItem value={"americas"}>Americas</MenuItem>
          <MenuItem value={"asia"}>Asia</MenuItem>
          <MenuItem value={"europe"}>Europe</MenuItem>
          <MenuItem value={"oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    );
}

export {SearchBar};	