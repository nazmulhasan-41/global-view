import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    let [country, setCountry] = useState([]);
    let { name } = useParams();

    useEffect(() => {
        let url = `https://restcountries.com/v3.1/name/${name}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
            })
    }, [])

    return (
        <div>
            <h2>
            showing Details of {name}
                </h2>

            <h4>
                {
                    country.map(country => ( 
                        < >
                            capital: {country.capital}<br/>
                            continents:{country.continents}<br/>
                            flags:{country.flags.png}<br/>
                            maps:{country.maps.googleMaps}<br/>
                            population:{country.population}<br/>
                            region: {country.region}<br/>
                        </>

                    ))
                }

            </h4>

        </div>
    );
};

export default Details;