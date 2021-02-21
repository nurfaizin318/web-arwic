import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';


const Gallery = () => {
    return (
        <Container fluid className="bg-light p-0">
            <Row className="w-100">
                <Col style={{ minHeight: '82vh' }} className="m-3" >
                    <Row>
                        <Col className="text-center">
                            <h3>Arwics</h3>
                            <h2 className="text-dark"><b>Gallery</b></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center p-0" style={{ minHeight: '62vh' }}>

                            <div className="gallery-img">
                                <ul className="p-0">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ctx, index) => {
                                        return (
                                            <li className="bg-danger" key={index}>
                                                <div className="gallery-card-container shadow">
                                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                                                        style={{ width: 400, height: 400, objectFit: 'cover'}}

                                                        alt="img"
                                                    />
                                                    <div className="w-100  m-0 text-left p-2 text-dark">
                                                        <h3>Name</h3>
                                                    </div>
                                                    <div className="w-100  m-0 p-2 text-left text-dark">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;

