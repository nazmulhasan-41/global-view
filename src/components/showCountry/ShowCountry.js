import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowCountry.css'

const ShowCountry = (props) => {

    var countryObj = props.countryObj;
    var character = countryObj[0].name.common.charAt(0);

    return (
        <>

            <div className='character'>
                {character}-{countryObj.length}

            </div>

            {
                countryObj.map(data => (

                    <Col key={Math.random()}>

                        <div className='border'>
                        <Link to={`/country/${data.name.common}`}>


                            <img src={data.flags.png} alt="Girl in a jacket" width="40" />
                            <div className='countryNameDiv'>{data.name.common}</div>

                        </Link>

                        </div>

                    </Col>
                )
                )
            }


        </>



    );
};

export default ShowCountry;