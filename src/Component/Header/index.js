import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    DropdownButton,
    Dropdown

} from 'react-bootstrap';
import './index.css';
import { useTranslation } from 'react-i18next';




const Header = ({ NavLink }) => {


    const { t, i18n } = useTranslation();

    const changeLanguage = (ctx) => {
        i18n.changeLanguage(`${ctx}`)
    }

    
    return (
        <Navbar bg="white" expand="lg" className="px-5 py-3 sticky-top navbar-header" style={{ fontSize: 13, }}>
            <Navbar.Brand href="#home">
                 <img src="https://arwics.com/wp-content/uploads/2019/09/arwics-logo-1.png" style={{width:110,height:30,objectFit:"cover"}}  alt="icon" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto navbar-insurance" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">
                            {t('header.1')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-link" activeClassName="active" >
                                <span >{t('header.2')}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className="nav-link ">
                                <span >{t('header.3')}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                <span >{t('header.4')}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gallery" className="nav-link">
                                <span >{t('header.5')}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/news" className="nav-link">
                                <span >{t('header.6')}</span>
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