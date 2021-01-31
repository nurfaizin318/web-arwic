import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';




const News = () => {
    return (

        <Container fluid>
            <Row className="product-row bg-light w-100">
                <div className="news-card-container">
                    <ul>
                        <li>
                            <Col xs={12} md={6} lg={5} className=" my-1 mx-auto " style={{ backgroundColor: "white" }} >
                                <Row>
                                    <Col lg={7} className="text-center m-0 p-4  " >
                                        <img src="https://arwics.com/wp-content/uploads/2019/09/finai.jpg" className="w-100 h-100"
                                            alt="img"
                                        />
                                    </Col>
                                    <Col lg={4} className="p-4 bg-warning m-2 rounded" style={{ fontSize: "1.4em" }}>
                                        <h5><b>Arwics Credit Loan Micro Banking and Peer to Peer Lending Sharia Platform</b></h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="p-4" style={{ fontSize: 13, color: "grey" }}>
                                        <p>
                                            Financial Technology Platform for all types of peer to peer loan activities with sharia concept. The platform has support and a complete solution for peer to peer lending activities and Credit loan Mikro Banking with the following capabilities. This application will complete feature from market place, borrower registration and investors, profiling, credit scoring, monitoring, big data analysis and collection for Sharia.
                                <br />Arwics also introduces innovative AI-Based solutions to fulfill the needs of financial credit risk management from credit verification, credit assessment, credit pricing and credit collection
                                      </p>
                                    </Col>
                                </Row>
                            </Col>

                        </li>
                        <li>
                            <Col xs={12} md={6} lg={5} className=" my-1 mx-auto " style={{ backgroundColor: "white" }} >
                                <Row>
                                    <Col lg={7} className="text-center m-0 p-4  " >
                                        <img src="https://arwics.com/wp-content/uploads/2019/09/finai.jpg" className="w-100 h-100"
                                            alt="img"
                                        />
                                    </Col>
                                    <Col lg={4} className="p-4 bg-warning m-2 rounded" style={{ fontSize: "1.4em" }}>
                                        <h5><b>Arwics Credit Loan Micro Banking and Peer to Peer Lending Sharia Platform</b></h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="p-4" style={{ fontSize: 13, color: "grey" }}>
                                        <p>
                                            Financial Technology Platform for all types of peer to peer loan activities with sharia concept. The platform has support and a complete solution for peer to peer lending activities and Credit loan Mikro Banking with the following capabilities. This application will complete feature from market place, borrower registration and investors, profiling, credit scoring, monitoring, big data analysis and collection for Sharia.
                                <br />Arwics also introduces innovative AI-Based solutions to fulfill the needs of financial credit risk management from credit verification, credit assessment, credit pricing and credit collection
                                 </p>
                                    </Col>
                                </Row>
                            </Col>
                        </li>
                    </ul>
                   x
                </div>
            </Row>
        </Container>
    );
}

export default News;