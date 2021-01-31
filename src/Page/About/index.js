import React, { useEffect } from 'react';
import { Col, Row, Carousel, Container } from 'react-bootstrap';
import './index.css';
import vision from "../../Assets/Icons/vission.png"
import mision from "../../Assets/Icons/mission.png"
import goal from "../../Assets/Icons/goal.png"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <Container fluid className="text-dark" >
                    <Row className="about-row2 text-secondary" style={{ minHeight: '60vh' }}>
                        <Col xs={12} lg={5} className="p-5 " style={{ backgroundColor: 'white', fontSize: 12 }}>
                            <div className="mx-auto" >
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
                        <Col lg={1} xs={12} className="text-center" style={{ backgroundColor: "#F5F5F5" }}>
                            <Row className="p-1" >
                                <Col lg={12} xs={4} className=" about-row2-col2 " style={{ height: 150 }}>
                                    <div data-aos="fade-up">
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
                                    <div data-aos="fade-up">
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
                                    <div data-aos="fade-up">
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
                       <Col xs={12} lg={6} className="pl-5 pt-2 mx-auto" style={{ backgroundColor: "#ECEFF1", fontSize: 13 }}>
                            <Row>
                                <Col data-aos="fade-up" >
                                    <Row style={{minHeight:140}} >
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
                            <Row className="mt-2 ">
                                <Col data-aos="fade-up" >
                                    <Row style={{minHeight:140}} >
                                        <Col lg={2} className="p-0 x">
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
                            <Row className="mt-2 ">
                                <Col data-aos="fade-up">
                                    <Row   style={{minHeight:140}} >
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
                    <Row>
                        <Col style={{ minHeight:'80vh',backgroundColor: '#263238' }} >
                            <Row>
                                <Col className="text-center">
                                    <h1 className="text-light mt-5 ">Arwics Team</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="about-team  text-center">
                                        <ul className="p-0">
                                            <li data-aos="fade-up" data-aos-duration="500">
                                                <div className="about-card-container">
                                                    <div className="avatar-container ">
                                                        <div className="about-avatar">
                                                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3">
                                                        <p className="text-warning text-bold"><b>Position</b></p>
                                                        <h4 className="text-light"><b>Name</b></h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up" data-aos-duration="700">
                                                <div className="about-card-container">
                                                    <div className="avatar-container ">
                                                        <div className="about-avatar">
                                                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3">
                                                        <p className="text-warning text-bold"><b>Position</b></p>
                                                        <h4 className="text-light"><b>Name</b></h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up" data-aos-duration="900">
                                                <div className="about-card-container">
                                                    <div className="avatar-container ">
                                                        <div className="about-avatar">
                                                            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3">
                                                        <p className="text-warning text-bold"><b>Position</b></p>
                                                        <h4 className="text-light"><b>Name</b></h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up" data-aos-duration="1100">
                                                <div className="about-card-container">
                                                    <div className="avatar-container ">
                                                        <div className="about-avatar">
                                                            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3">
                                                        <p className="text-warning text-bold"><b>Position</b></p>
                                                        <h4 className="text-light"><b>Name</b></h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up" data-aos-duration="1300">
                                                <div className="about-card-container">
                                                    <div className="avatar-container ">
                                                        <div className="about-avatar">
                                                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3">
                                                        <p className="text-warning text-bold"><b>Position</b></p>
                                                        <h4 className="text-light"><b>Name</b></h4>
                                                    </div>
                                                </div>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ minHeight: '40vh', backgroundColor: "#388E3C", textAlign: 'center' }} >
                        <Row className="w-100 text-center">
                            <Col  >
                                <h1 className="text-light m-4"><b>Our Client</b></h1>
                                <hr style={{maxWidth:200,borderWidth:3,borderColor:'white'}}></hr>
                            </Col>
                        </Row>
                        <Row className="w-100 text-center">
                            <Col >
                                <div className="about-partner">
                                    <ul className="p-0">
                                        <li>
                                            <img src="https://miro.medium.com/max/3508/1*POIunC9euahenSUX26jXSg.png" style={{ width: 100, height: 100, objectFit: 'cover' }} />
                                        </li>
                                        <li>
                                            <img src="https://lh3.googleusercontent.com/mlQLDXaq1AW7N3xRsWZX8xzgXq-j3TPj9oww8F8mGKfn4Xg-pzAM1bOeZyMw_ow2cPI" style={{ width: 100, height: 100, objectFit: 'cover' }} />
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default About;