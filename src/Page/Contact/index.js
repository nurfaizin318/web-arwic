import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import './index.css';
import { faBuilding, faMapMarked, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com'



const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const SITE_KEY = "6LfBfjIaAAAAAGsz_7vZT7oYtvfLfvd3JKBI8Rkr";
    // const SCREET_KEY = "6Le5fjIaAAAAAHwTL5_CvQH98xwKCbHSlKXQmpUs";
    const [state, setState] = useState(false);
    const [toastSuccess, setToastSuccess] = useState(false)
    const [toastFailed, setToastFailed] = useState(false)
    const [onSending, setOnSending] = useState(false)

    const [data, setData] = useState({
        name: '',
        email: '',
        telephone: '',
        company: '',
        subject: '',
        message: '',
    })
    function onChangeChapta(value) {
        try {
            if (value !== null) {
                setState(true)

            }
        } catch (err) {
            console.log(err)
        }


    }

    const sendEmail = async () => {
        await setOnSending(true);
        let templateParams = {
            from_name: data.email,
            telephone: data.telephone,
            company: data.company,
            to_name: 'ARWICS',
            message_html: data.message,
        }


        await emailjs.send(
            'service_5hp9j1f',
            'template_wtdn9qv',
            templateParams,
            'user_jHw4NXL68hAzv3dS1YCDV'
        ).then(function (response) {
            response.status === 200 && setToastSuccess(true);
            document.getElementById('form-message').reset();

        }, function (error) {
            setToastFailed(true)
            console.log('FAILED...', error);
        });

        await setOnSending(false);
    }

    return (
        <>
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
                        <Container fluid>
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
                        <Container fluid>
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
                                    <Col className="" style={{ fontSize: 12 ,overflow:"auto"}}>
                                    {state === false ?
                                <Col style={{ overflow: 'auto' }}>
                                    <ReCAPTCHA

                                        sitekey={SITE_KEY}
                                        onChange={onChangeChapta}
                                    />
                                </Col>
                                :
                                        <Form onSubmit={handleSubmit(sendEmail)} id="form-message">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    onChange={(e) => { setData({ ...data, name: e.target.value }) }} />

                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    required
                                                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}

                                                />

                                            </Form.Group>
                                            <Form.Group controlId="formBasicTelephone">
                                                <Form.Label>Telephone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    onChange={(e) => { setData({ ...data, telephone: e.target.value }) }}
                                                />

                                            </Form.Group>
                                            <Form.Group controlId="formBasicCompany">
                                                <Form.Label>Company</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    onChange={(e) => { setData({ ...data, company: e.target.value }) }}
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicMessage">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    onChange={(e) => { setData({ ...data, message: e.target.value }) }}
                                                />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>


                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check
                                                    label="By using this form you agree with the storage and handling of your data by this website."
                                                    id="agree"
                                                    name="agree"
                                                    ref={register({ required: true, maxLength: 30 })} />
                                                {errors.agree && errors.agree.type === "required" && (
                                                    <p style={{ color: "red" }}>* This is required</p>
                                                )}
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                {onSending ? 'mengirim...' : 'Submit'}
                                            </Button>
                                        </Form>
                            }

                                    </Col>

                                </Row>
                        </Container>

                    </Col>

                </Row>
                <Toast style={{ position: "fixed", left: 20, bottom: 20, width: 200,zIndex:999 }}
                onClose={() => setToastSuccess(false)}
                show={toastSuccess}
                animation={true}
                className="bg-info text-light">
                <Toast.Header>

                    <strong className="mr-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>Success Send Email</Toast.Body>
            </Toast>
            <Toast style={{ position: "fixed", left: 20, bottom: 20, width: 200,zIndex:999 }}
                onClose={() => setToastFailed(false)}
                show={toastFailed}
                animation={true}
                className="bg-danger text-light">
                <Toast.Header>

                    <strong className="mr-auto">Failed</strong>
                </Toast.Header>
                <Toast.Body> Failed Send Email</Toast.Body>
            </Toast>
            </Container>
           
        </>
    );
}

export default Contact;