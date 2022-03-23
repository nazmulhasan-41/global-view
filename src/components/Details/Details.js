
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

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
    // const arrowIcon=<FontAwesomeIcon icon={faArrowAltCircleRight} />;
    const arrowIcon=''

    return (
        <div>
            
            <Container>

                <h4>
                    {
                        country.map(country => (
                            < >
                                <Modal.Dialog>
                                    <Modal.Header >
                                        <Modal.Title>{name} <img style={{'width': '40px', 'height': '30px'}} src={country.flags.png} alt="Girl in a jacket" width="500" height="600"></img></Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        

                                        <Row className='row'>
                                            <Col>capital  {arrowIcon}
                                             
                                             </Col>
                                            
                                            <Col>{country.capital}</Col><br/>
                                            
                                        </Row>

                                        <Row className='row'>
                                            <Col>continents
                                            {arrowIcon}  </Col>

                                            
                                            <Col>{country.continents}</Col>

                                        </Row>

                                        <Row className='row'>
                                            <Col>population 
                                            {arrowIcon}
                                             </Col>
                                            
                                            <Col>{country.population}</Col>

                                        </Row>
                                        <Row className='row'>
                                            <Col>region 
                                            {arrowIcon}
                                             </Col>
                                            
                                            <Col>{country.region}</Col>

                                        </Row>


                                    </Modal.Body>

                                </Modal.Dialog>                              
                            </>

                        ))
                    }

                </h4>

            </Container>

        </div>
    );
};

export default Details;



