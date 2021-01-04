import React  from 'react';
import  {useState, useEffect} from 'react';  
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';  
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';  


const CountryPicker =({handelCountryChange}) => {
    const [fetchedCountires, setFetchedCountires] = useState([]); 

    useEffect(()=>{  
        const fetchAPI = async () =>{  
            setFetchedCountires(await fetchCountries());  
        }  
        fetchAPI();  
    }, [setFetchedCountires]);  

    return(

        <FormControl className={StylesProvider.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handelCountryChange(e.target.value)}>
            <option value="">Global</option> 
                {fetchedCountires.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker;