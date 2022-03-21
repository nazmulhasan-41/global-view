import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getFID } from 'web-vitals';
import Country from '../country/Country';
import ShowCountry from '../showCountry/ShowCountry';
import './Countries.css'

const Countries = () => {

    let [countries, setCountries] = useState([]);
    const url = `https://restcountries.com/v3.1/all`;

    let [finalCountryList,setFinalCountryList]=useState([]);
       
    
    var countryArray = new Array(29);
    for (var i = 0; i < countryArray.length; i++) {
        countryArray[i] = new Array();
    }


    function compare(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }


    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.sort(compare);
                setCountries(data);
                console.log(data);


                // for (var j = 0; j < countries.length; j++) {
                //     if (((countries[j].name.common.charAt(0).charCodeAt(0)) - 65) < 26) {
                //         //console.log((countries[j].name.common.charAt(0).charCodeAt(0))-65)
                //         countryArray[((countries[j].name.common.charAt(0).charCodeAt(0)) - 65)].push(countries[j]);
                //     }
                // }
            })
    }, [])

    useEffect(() => {
        // countries.map(x=>console.log(x.name.common.charAt(0)));

        for (var j = 0; j < countries.length; j++) {
            if (((countries[j].name.common.charAt(0).charCodeAt(0)) - 65) < 26) {
                //console.log((countries[j].name.common.charAt(0).charCodeAt(0))-65)
                countryArray[((countries[j].name.common.charAt(0).charCodeAt(0)) - 65)].push(countries[j]);
            }
        }
        setFinalCountryList(countryArray);
    }, [countries])

        // console.log(x.length,'total length');
        // x.map(data=>console.log(data.length))
        
        // console.log("==============??>>>>")
        // for (var k=0;k<26;k++)
        // {
        //     console.log(x[k].length);
        //     x[k].map(data=>console.log(data.name.common))
        //     console.log("[[[[[[[[[]]]]]]]]]]]]]")
        // }




    return (
        <div>
            <h3 className='countryNumber'>Country Numbers: {countries.length}</h3>

            <Row>
                
                    {
                            finalCountryList.map(countryObjects=>
                            (countryObjects.length) ?
                            <ShowCountry key={Math.random()} countryObj={countryObjects}/>
                            :''
                            
                            )
      
                    }
                    
                

{/* 
                <div className='countryContainer'>
                    {
                     countries.map(country => <Country key={Math.random()} country={country}></Country>)
                    }
                </div> */}

            </Row>

        </div>
    );
};

export default Countries;