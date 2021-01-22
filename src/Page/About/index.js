import React, { useEffect} from 'react';
import { Col, Row, Carousel, Container } from 'react-bootstrap';
import './index.css';
import vision from "../../Assets/Icons/vission.png"
import mision from "../../Assets/Icons/mission.png"
import goal from "../../Assets/Icons/goal.png"


import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {



    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])



    return (
        <>
            <div className="about">
                <div className="">
                    <div className="col-about-carousel ">
                        <Carousel style={{ height: '100%' }}>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src="https://learn.g2.com/hubfs/What_is_Information_Technology.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.nds.com.pk/wp-content/uploads/2019/03/new-technologies-in-software-field.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Container fluid className="text-dark">
                    <Row className="about-row2 text-secondary">
                        <Col xs={12} lg={5} className=" p-5 " style={{ backgroundColor: 'white', fontSize: 12 }}>
                            <div className=" mx-auto" >
                                <h3 className="mt-5" style={{ fontSize: 50 }}><b>ABOUT ARWICS</b></h3>
                                <div className="mb-2"><b><h6>Team with a strong experience </h6></b></div>
                                <div className="about-arwics" >
                                    Arwics was founded in 2014, we are a fast growing company with
                                    strong Development Team consists of experienced professionals.
                            <div className="mt-2" >Arwics is one of the System Integrator companies initiated by the children of the nation in the midst of incessant investment from abroad, we try to always provide our best solutions with sources from within the country, our dream is that all lines of business that exist in the motherland can be sovereign in their own country.
                            </div>
                                    <div className="mt-2 "><b>Our consulting mantra is guided by 3 simple rules.</b></div>
                                    <div className="mt-2">Focus on business priorities</div>
                                    <div>Custom made solution</div>
                                    <div>Standardized methodologies</div>
                                </div>
                            </div>
                        </Col>
                        <Col  lg={1} xs={12} className="p-2 " style={{ backgroundColor: "#F5F5F5" }}>
                            <Row className="p-3" >
                                <Col lg={12} xs={4} className="about-row2-col2 " style={{ height: 150 }}>
                                    <div data-aos="fade-left">
                                        <Row>
                                            <Col>
                                                <div className="about-skill mx-auto">
                                                    <p><b>16</b></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="mt-2"><b>Specialists</b></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} xs={4} className=" about-row2-col2 " style={{ height: 150 }}>
                                    <div data-aos="fade-left">
                                        <Row>
                                            <Col>
                                                <div className="about-skill mx-auto">
                                                    <p><b>120</b></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="mt-2 "><b>Happy Client</b></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} xs={4} className=" about-row2-col2 " style={{ height: 150 }}>
                                    <div data-aos="fade-left">
                                        <Row>
                                            <Col>
                                                <div className="about-skill mx-auto">
                                                    <p><b>315</b></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="mt-2"><b>Sucessfull Case</b></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={6} className="p-5 mx-auto p-3" style={{ backgroundColor: "#ECEFF1", fontSize: 13 }}>
                            <Row>
                                <Col data-aos="fade-up" >
                                    <Row>
                                        <Col lg={2} className=" p-0">
                                            <div className="about-goal-icons "  >
                                                <img src={mision} style={{ width: 47, height: 35, marginLeft: -10 }}
                                                    alt="img"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={10} className="p-2 mt-2 pl-3 about-goal-description">
                                            <div><b>Mission</b></div>
                                            <div>Best result for stakeholders
                                            <br />Actively support knowledge and technology development in Indonesia
                                            <br />Contribute to community and people development in Indonesia</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-2 pt-4">
                                <Col data-aos="fade-up">
                                    <Row>
                                        <Col lg={2} className="p-0">
                                            <div className="about-goal-icons">
                                                <img src={vision} style={{ width: 35, height: 35 }}
                                                    alt="img"

                                                />
                                            </div>
                                        </Col>
                                        <Col lg={10} className="p-2 mt-2 pl-3 about-goal-description">
                                            <div><b>Vission</b></div>
                                            <div>To be a preferred partner in IT solution, that provide high quality results with cost effective approach.</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-2 pt-4">
                                <Col data-aos="fade-up">
                                    <Row>
                                        <Col lg={2} className="p-0">
                                            <div className="about-goal-icons" >
                                                <img src={goal} style={{ width: 45, height: 45 }}
                                                    alt="img"

                                                />
                                            </div>
                                        </Col>
                                        <Col lg={10} className="p-2 mt-2 pl-3 about-goal-description">
                                            <div><b>Goals</b></div>
                                            <div>To be a preferred partner in IT solution, that provide high quality results with cost effective approach.</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default About;