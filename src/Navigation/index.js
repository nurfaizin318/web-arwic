import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    // Link
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';

  //component
  import Header from '../Component/Header';
  import Footer from '../Component/Footer';


  //page

  import Home from "../Page/Home"

const Navigation = () => {
    return ( 
        <div >
    <Router>
      <Header />
        <Switch>
            <Home />
        </Switch>
        <Footer />
    </Router>
    </div>
     );
}
 
export default Navigation;