import React, { useEffect } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './index.css';
import icons_card from '../../Assets/Icons/icons.webp';
import hands from '../../Assets/Icons/hand.png';
import robot from '../../Assets/Icons/robot.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    < >
      <div>
        <Container fluid>
          <Row>
            <Col data-aos="fade-right" xs={12} lg={6} className="row1-col1" style={{ minHeight: '91vh' }}>
              <div className="row1-back-ar ">
                <p>AR</p>
              </div>
              <div>
                <img className="hand-img" src={hands} style={{ width: 250, height: 250, position: "absolute", bottom: 0, right: 0 }} alt="img" />
              </div>
              <div data-aos="fade-right" className="mx-auto description-text" style={{ width: '60%', color: "#78909C", zIndex: 99, }}>
                <h1 className="text-info"><b>WELCOME TO</b></h1>
                <h1><b>ARWICS</b></h1>
                <p >We are an Information technology company with our specialty is data processing. Combined with Artificial Intelligence technology, we will bring a new approach to the world of financial, banking and insurance industries.
                With the Data Analysis and combine with Artificial Intelligence approaches to all our data, we can make profiling all of customers and provide measurable targets for customer needs.
              </p>

              </div>
            </Col>
            <Col  data-aos="fade-left"  xs={12} lg={6} className="bg-light">
              <div className="row1-back-wics ">
                <p>wics</p>
              </div>
              <div>
                <img  className="robot-img" src={robot} style={{ width: 250, height: 250, position: "absolute", top: 10, left: -68 }} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-card-container text-center">
        <ul className="p-0">
          <li>
            <div data-aos="fade-right" className="home-card">
              <Row>
                <Col className="col-icons-container">
                  <img data-aos="fade-bottom" src={icons_card} style={{ width: 80, height: 80 }} alt="icon" />
                </Col>
              </Row>
              <Row>
                <Col className="col-card-title">
                  <b>Proven</b>
                </Col>
              </Row>
              <Row>
                <Col className="col-card-description">
                  Already implemented in some banking and insurance industry
                  </Col>
              </Row>
            </div>
          </li>
          <li>
            <div data-aos="fade-up" className="home-card">
              <Row>
                <Col className="col-icons-container">
                  <img src={icons_card} style={{ width: 80, height: 80 }} alt="icon" />
                </Col>
              </Row>
              <Row>
                <Col className="col-card-title">
                  <b>Total Solution</b>
                </Col>
              </Row>
              <Row>
                <Col className="col-card-description ">
                  Bring total solution for Banking and Insurance industry. Move from traditional to digital approach combine with Artificial intelligence.

                  </Col>
              </Row>
            </div>
          </li>
          <li>
            <div data-aos="fade-up" className="home-card">
              <Row>
                <Col className="col-icons-container">
                  <img src={icons_card} style={{ width: 80, height: 80 }} alt="icon" />
                </Col>
              </Row>
              <Row >
                <Col className="col-card-title" >
                  <b>
                    Strong <br></br> Business Process</b>
                </Col>
              </Row>
              <Row>
                <Col className="col-card-description">
                  We have a lot of business Model for loan and insurance industri. With this model, we can elaborate with client to define suitable solution for client
                  </Col>
              </Row>
            </div>
          </li>
          <li>
            <div data-aos="fade-left" className="home-card">
              <Row>
                <Col className="col-icons-container">
                  <img src={icons_card} style={{ width: 80, height: 80 }} alt="icon" />
                </Col>
              </Row>
              <Row>
                <Col className="col-card-title">
                  <b>
                    Expert & <br></br>Competence Team
                    </b>
                </Col>
              </Row>
              <Row>
                <Col className="col-card-description ">
                  Support by Advance/ Expert Team specialist in Business Analyst, IT Software Development, Big Data, Artificial Intelligence, Banking and Insurance
                  </Col>
              </Row>
            </div>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: "#26A69A", }} className="row-3  text-center text-light ">
        <Container fluid>
          <Row >
            <Col xs={12} md={6} xl={6} className=" p-0 m-0 " >
              <img data-aos="fade-up" src="https://images.unsplash.com/photo-1581092786450-7ef25f140997?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                className="w-100"
                alt="img"
              />
            </Col>
            <Col data-aos="fade-right" xs={12} md={6} xl={6} >
              <h2>Hurry up! Contact us today sand get</h2>
              <h1><b>FREE FIRST CONSULTATION </b></h1>
              <p>
                <Button variant="warning">BOOK YOUR CONSULTANT</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="home-card-container  " style={{ background: '#EEEEEE' }}>
        <Row style={{ width: '90%' }} className="mx-auto home-card-description-row4 ">
          <Col  data-aos="fade-up" lg={3} md={5} className=" m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left ">
                <img src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="px-4 py-2 ">
                <h5><b>GSM PBX</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className=""> this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col   data-aos="fade-up" lg={3} md={5} className="m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>ENTERPRISE MOBILE SOLUTION </b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col   data-aos="fade-up" lg={3} md={5} className="m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1591017923291-5d5df5eb7d78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>VEHICLE TRACKING</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col  data-aos="fade-left" lg={3} md={5} className=" m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left ">
                <img src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>MOBILE SURVEIL LANCE & FACE RECOGNITION RECOGNITION</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col  data-aos="fade-left" lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>AUTOMATIC METER READER</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col  data-aos="fade-left" lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1591017923291-5d5df5eb7d78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"

                />
              </Row>
              <Row className="py-2 text-left px-4 ">
                <h5><b>APLICATION FINANCE  & SERVICE</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;