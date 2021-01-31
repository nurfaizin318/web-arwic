import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//component
// import Header from '../Component/Header';
// import Footer from '../Component/Footer';

const Header = lazy(() => import('../Component/Header'))
const Footer = lazy(() => import('../Component/Footer'))

//page

// import Home from '../Page/Home';
// import About from '../Page/About';
// import Product from '../Page/Product';
// import Contact from '../Page/Contact';

const Home = lazy(() => import('../Page/Home'))
const About = lazy(() => import('../Page/About'))
const Product = lazy(() => import('../Page/Product'))
const Contact = lazy(() => import('../Page/Contact'))
const Gallery = lazy(() => import('../Page/Gallery'))
const News = lazy(() => import('../Page/News'))

const Navigation = () => {
  return (
    <div >
      <Router>
        <Suspense fallback={<div />}>
          <Header NavLink={NavLink} />
        </Suspense>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/Home">
            <Route>
              <Suspense fallback={<div />}>
                <Home />
              </Suspense>
            </Route>
          </Route>
          <Route path="/About">
            <Suspense fallback={<div />}>
              <About />
            </Suspense>
          </Route>
          <Route path="/Product">
            <Suspense fallback={<div />}>
              <Product />
            </Suspense>
          </Route>
          <Route path="/Contact">
            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>
          </Route>
          <Route path="/Gallery">
            <Suspense fallback={<div />}>
              <Gallery />
            </Suspense>
          </Route>
          <Route path="/News">
            <Suspense fallback={<div />}>
              <News />
            </Suspense>
          </Route>
        </Switch>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default Navigation;