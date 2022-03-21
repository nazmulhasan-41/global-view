import React from 'react';
import { Col } from 'react-bootstrap';
import './Country.css'

const Country = (props) => {
    let { name, flags } = props.country;
    return (
        <Col>

            <div className='border'>

                <img src={flags.png} alt="Girl in a jacket" width="40" />
                {name.common}

            </div>

        </Col>

    );
};

export default Country;