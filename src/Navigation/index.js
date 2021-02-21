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

const Header = lazy(() => import('../Component/Header'));
const Footer = lazy(() => import('../Component/Footer'));
const Sidebar = lazy(() => import('../Component/Sidebar'));

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


const HomeAdmin = lazy(() => import('../Page/Admin/Home'))

const Navigation = () => {

  return (
    <div >
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const User = (location) => {
  return (
    <>
      {location.pathname !== '/admin' && (
        <Suspense fallback={<div />}>
          <Header NavLink={NavLink} />
        </Suspense>)
      }
      <Route  path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <Suspense fallback={<div />}>
          <Home />
        </Suspense>
      </Route>
      <Route path="/about">
        <Suspense fallback={<div />}>
          <About />
        </Suspense>
      </Route>
      <Route path="/product">
        <Suspense fallback={<div />}>
          <Product />
        </Suspense>
      </Route>
      <Route path="/contact">
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      </Route>
      <Route path="/gallery">
        <Suspense fallback={<div />}>
          <Gallery />
        </Suspense>
      </Route>
      <Route path="/news">
        <Suspense fallback={<div />}>
          <News />
        </Suspense>
      </Route>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  )
}
const Admin = () => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Sidebar />
      </Suspense>
      <Route>
        <Switch>
          <Suspense fallback={<div />}>
            <HomeAdmin NavLink={NavLink} />
          </Suspense>
        </Switch>
      </Route>
    </div>
  )
}

export default Navigation;