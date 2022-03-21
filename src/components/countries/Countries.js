import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {

    let [countries, setCountries] = useState([]);
    const url = `https://restcountries.com/v3.1/all`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setCountries(data); console.log(data) })
    }, [])
    return (
        <div>
            <h3>Country Numbers: {countries.length}</h3>

            <Row>
                
                
            

            <div className='countryContainer'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>

            </Row>


        </div>
    );
};

export default Countries;