import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//component
import Header from '../Component/Header';
import Footer from '../Component/Footer';


//page

import Home from '../Page/Home';
import About from '../Page/About';
import Product from '../Page/Product';
import Contact from '../Page/Contact';

const Navigation = () => {
  return (
    <div >
      <Router>
        <Header NavLink={NavLink} />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Navigation;