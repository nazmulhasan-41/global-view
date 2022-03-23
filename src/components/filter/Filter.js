import React, { useEffect, useState } from 'react';
import { Badge, Container, Row,Button, Card } from 'react-bootstrap';
import ShowCountry from '../showCountry/ShowCountry';
import './Filter.css';

const Filter = (props) => {

    let [newLang, setNewLang] = useState([]);
    let [countryLang, setCountryLang] = useState([]);
    let countries = props.countries;
    let [countryObj,setCountryObj]=useState([]);

   let fromFilter=false;
    const languageShowHandler = () => {

        let obj;
        countries.map(country => {
            obj = country.languages;
            if (typeof (obj) !== 'undefined') {
                var keys = Object.keys(obj);

                keys.map(l => {
                    if (!newLang.find(x => x === l)) {
                        let arr = [];
                        
                        arr.push(obj[l]);// add language 
                        arr.push(country);// add full object
                        newLang.push(arr);
                    }
                }
                )
            }
        }
        )
        setCountryLang(newLang);
    }
    
    return (
        <div>
            <div>

            <Card>
                <Card.Header>Sort By </Card.Header>
                <Card.Body>
                    
                    <Button onClick={() => languageShowHandler()} variant="secondary">Language</Button>
                   
                </Card.Body>
                </Card>


            </div>

            <div> filter page {countries.length} </div>
            <Container>
                
                {
                    countryLang.map(info =>
                        <>

                            {/* //testing without currency repetation */}
                            {
                                ((countryLang.filter(language => language[0] === info[0])).length>0) ?

                                <>
                                <h5><Badge bg="secondary">{info[0]}</Badge> </h5>
                                <Row>

                                {(() => {
                                    countryObj = (countryLang.filter(language => language[0] === info[0])).map(fullCountry=>fullCountry[1])
                                    return <ShowCountry  
                                    
                                    countryObj={countryObj}
                                    fromFilter={fromFilter}
                                    key={Math.random()}
                                    
                                    />
                                })()}

                            <div >
                                {(() => {
                                    countryLang = countryLang.filter(language => language[0] !== info[0])
                                    return 
                                })()}
                            </div>

                            
                                </Row>

                            </>
                            :
                            ''
                            }
                            
                        </>
                    )
                }

            </Container>

        </div>
    );
};

export default Filter;





