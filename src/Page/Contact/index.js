import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './index.css';
import {  faBuilding, faMapMarked, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";




const Contact = () => {

    const SITE_KEY = "6LfBfjIaAAAAAGsz_7vZT7oYtvfLfvd3JKBI8Rkr";
    // const SCREET_KEY = "6Le5fjIaAAAAAHwTL5_CvQH98xwKCbHSlKXQmpUs";
    const [state, setState] = useState(false);



    function onChange(value) {
        try {
            if (value !== null) {
                setState(true)

            }
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <Container fluid className="contact">
            <Row className="p-4">
                <Col className="p-2  m-1" lg={5} style={{ color: "#90A4AE" }} >
                    <Row>
                        <Col>
                            <h3>CONTACT INFO</h3>
                        </Col>
                    </Row>
                    <Container fluid>
                        <Row className="mt-1 ">
                            <Col lg={2} xs={3} className="p-3 ">
                                <div className="contact-list-icon">

                                    <FontAwesomeIcon icon={faBuilding} color="#FF9800" style={{ fontSize: 20 }} />

                                </div>
                            </Col>
                            <Col lg={9} xs={7} className="pt-4 ml-1 ">
                                <p>	PT ARWIC TECHNOLOGY SOLUSINDO</p>
                                <hr style={{ width: '20%', float: "left" }} />

                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row className="mt-1">
                            <Col lg={2} xs={3} className="p-3">
                                <div className="contact-list-icon">
                                    <FontAwesomeIcon icon={faMapMarked} color="#FF9800" />

                                </div>
                            </Col>
                            <Col lg={9} xs={7} className="pt-4 ml-1">
                                <p>The CEO Building, 12th Floor
                                Jl. TB Simatupang No. 18C
                            Jakarta 12430</p>
                                <hr style={{ width: '20%', float: "left" }} />


                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="mt-1">
                            <Col lg={2} xs={3} className="p-3">
                                <div className="contact-list-icon">
                                    <FontAwesomeIcon icon={faPhoneAlt} color="#FF9800" />
                                </div>
                            </Col>
                            <Col lg={9} xs={7} className="pt-4 ml-1">
                                <p>02129222999</p>
                                <hr style={{ width: '20%', float: "left" }} />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="mt-1">
                            <Col lg={2} xs={3} className="p-3">
                                <div className="contact-list-icon">
                                    <FontAwesomeIcon icon={faEnvelope} color="#FF9800" />
                                </div>
                            </Col>
                            <Col lg={9} xs={7} className="pt-4 ml-1 ">
                                <p>info@arwics.com</p>
                                <hr style={{ width: '20%', float: "left" }} />

                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={5} className="m-1 p-4 mx-auto" style={{ backgroundColor: "white" }} >
                    <Container>
                        <Row>
                            <Col>
                                <h5><b>Send Us a Message</b></h5>
                                <p>Hubungi Kami melalui pesan email</p>
                            </Col>

                        </Row>

                        <Row >
                            {state === false ?
                                <Col style={{overflow:'auto',height:300}}>
                                    <ReCAPTCHA
                                        
                                        sitekey={SITE_KEY}
                                        onChange={onChange}
                                    />
                                </Col>
                                :



                                <Col className="" style={{ fontSize: 12 }}>
                                    <Form>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="email" />

                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" />

                                        </Form.Group>
                                        <Form.Group controlId="formBasicTelephone">
                                            <Form.Label>Telephone</Form.Label>
                                            <Form.Control type="email" />

                                        </Form.Group>
                                        <Form.Group controlId="formBasicCompany">
                                            <Form.Label>Company</Form.Label>
                                            <Form.Control type="email" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control type="email" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label=" By using this form you agree with the storage and handling of your data by this website." />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                    </Button>
                                    </Form>
                                </Col>
                            }
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    );
}

export default Contact;