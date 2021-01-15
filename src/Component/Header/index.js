import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl

} from 'react-bootstrap';
import './index.css'

const Header = ({ NavLink }) => {
    return (
        <Navbar bg="white" expand="lg" className="px-5 py-3 sticky-top navbar-header" style={{ fontSize: 13, }}>
            <Navbar.Brand href="#home">ARWICS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto navbar-insurance" >
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink to="/home" className="nav-link">
                                <span >Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-link"  activeClassName="active" >
                                <span >About Arwic</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Product" className="nav-link ">
                                <span >Product</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                <span >Contact</span>
                            </NavLink>
                        </li>
                        <li>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 search-header" />
                        </Form>
                        </li>
                    </ul>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;