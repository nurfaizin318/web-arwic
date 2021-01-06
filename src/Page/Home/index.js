import React from 'react';
import { Carousel, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import icons_card from '../../Assets/Icons/icons.webp'

const Home = () => {
  return (
    <>
      <Row>
        <Col lg={12} xs={12} md={12}  >
          <Jumbotron className="home-jumbotron">

            <h2 >Welcome to Arwics</h2>

            <p>We are an Information technology company with our specialty is data processing.<br></br>
              Combined with Artificial Intelligence technology,<br></br> we will bring a new approach to the world of financial,<br></br>
               banking and insurance industries.</p>

            <p>
              With the Data Analysis and combine with Artificial Intelligence approaches to all our data,<br></br>
               we can make profiling all of customers and provide measurable targets for customer needs.</p>

            <p>In addition, the technology that we have developed,<br></br>
               we can deliver direct communication from banking / financial /insurance companies to end users.
              </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="py-5 " style={{ backgroundColor: "#ECEFF1" }}>
        <Col className="home-card-container text-center">
          <ul className="p-0">
            <li>
              <div className="home-card">
                <Row>
                  <Col className="col-icons-container">
                    <img src={icons_card} style={{ width: 80, height: 80 }} />
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
              <div className="home-card">
                <Row>
                  <Col className="col-icons-container">
                    <img src={icons_card} style={{ width: 80, height: 80 }} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-card-title">
                    <b>Total Solution</b>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-card-description">
                    Bring total solution for Banking and Insurance industry. Move from traditional to digital approach combine with Artificial intelligence.

                  </Col>
                </Row>
              </div>
            </li>
            <li>
              <div className="home-card">
                <Row>
                  <Col className="col-icons-container">
                    <img src={icons_card} style={{ width: 80, height: 80 }} />
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
              <div className="home-card">
                <Row>
                  <Col className="col-icons-container">
                    <img src={icons_card} style={{ width: 80, height: 80 }} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-card-title">
                    <b>
                      Expert & <br></br>Competence Team </b>
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

        </Col>
      </Row>
      <Row>
        <Col style={{ height: 200, backgroundColor: "#00838F" }} className="py-4 text-center text-light">
          <h2>Hurry up! Contact us today and get</h2>
          <h1><b>FREE FIRST CONSULTATION </b></h1>
          <p>
              <Button variant="warning">BOOK YOUR CONSULTANT</Button>
            </p>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: 600, backgroundColor: "#E0F2F1" }} className="py-4 text-center text-light">
        
          <p>
              <Button variant="warning">BOOK YOUR CONSULTANT</Button>
            </p>
        </Col>
      </Row>
      

    </>
  );
}

export default Home;