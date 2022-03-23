import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <h3><Link className='title' to="/">GlobalView</Link></h3>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto " >
                            <Link className="headerLink" to="/countries">Countries</Link>
                            <Link className="headerLink" to="/country/filter">Filter</Link>
                            <Link className="headerLink" to="/smt">something</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;