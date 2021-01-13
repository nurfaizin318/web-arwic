import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,


} from 'react-bootstrap';
import './index.css'

const Header = ({ Link }) => {
    return (
        <Navbar bg="white" expand="lg" className="px-5 py-3 sticky-top" style={{ fontSize: 13, }}>
            <Navbar.Brand href="#home">ARWICS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto navbar-insurance" >
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link">
                                <span >Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link ">
                                <span >About Arwic</span>
                            </Link>
                        </li>
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item href="home" className="dropdown-items">Finansial Service With AI</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="dropdown-items">Infrastructure and IOT</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Solution" id="basic-nav-dropdown">
                            <NavDropdown.Item href="home" className="dropdown-items">Data Werehouse and Bussines Intelligent</NavDropdown.Item>
                            <NavDropdown.Item href="#action" className="dropdown-items">Enterprise Aplication Development</NavDropdown.Item>
                            <NavDropdown.Item href="#a" className="dropdown-items">Resources Management</NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                <span >Contact</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/serach" className="nav-link">
                                <span >Search</span>
                            </Link>
                        </li>
                    </ul>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;