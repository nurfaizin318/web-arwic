import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'

const Product = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center py-3">
                    <h2>PRODUCT</h2>
                </Col>
            </Row>
            <Row className="product-row bg-light">
                <Col xs={12} md={6} lg={5} className=" my-1 mx-auto m-5" style={{ backgroundColor: "white" }} >
                    <Row>
                        <Col lg={7} className="text-center m-0 p-4  " >
                            <img src="https://arwics.com/wp-content/uploads/2019/09/finai.jpg" className="w-100 h-100" />
                        </Col>
                        <Col lg={4} className="p-4 bg-warning m-2 rounded" style={{ fontSize: "1.4em" }}>
                            Arwics Credit Loan Micro Banking and Peer to Peer Lending Sharia Platform
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-4" style={{ fontSize: 13, color: "grey" }}>
                            <p>
                                is a Financial Technology Platform for all types of peer to peer loan activities with sharia concept. The platform has support and a complete solution for peer to peer lending activities and Credit loan Mikro Banking with the following capabilities. This application will complete feature from market place, borrower registration and investors, profiling, credit scoring, monitoring, big data analysis and collection for Sharia.
                                <br />Arwics also introduces innovative AI-Based solutions to fulfill the needs of financial credit risk management from credit verification, credit assessment, credit pricing and credit collection
                        </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} lg={5} className=" my-1 mx-auto m-5" style={{ backgroundColor: "white" }}>
                    <Row>
                        <Col lg={7} className="text-center m-0 p-4">
                            <img src="https://arwics.com/wp-content/uploads/2019/09/infra.jpg" className="w-100 h-100" />
                        </Col>
                        <Col lg={4} className="p-4 bg-info text-light m-2 rounded" style={{ fontSize: "1.4em" }}>
                            We provide complete solution for Infrastructure and IOT
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-4" style={{ fontSize: 13, color: "grey" }}>
                            <p>
                                Arwics is strongly focused to provide infrastructure solution for customer solution. Starting from gathering requirement, analysis until design Infrastructure such as Data Center or Networking or surrounding environment, we can support this infrastructure.
                                <br />We can choose suitable solution base to meet customer need and budgeting.
                                <br />Not only infrastructure, we can also provide suitable IOT solution such as smart city solution, smart home solution and many things.
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* //row solutions */}


            <Row>
                <Col className="text-center py-3">
                    <h2>SOLUTIONS</h2>
                </Col>
            </Row>
            <Row className="bg-light ">
                <Col >
                    <Row className="p-5" style={{ backgroundColor: "#FAFAFA" }} >
                        <Col lg={4} xs={12} className="p-2">
                            <img src="https://arwics.com/wp-content/uploads/2019/09/infra.jpg" style={{ width: '100%', height: '100%' }} />
                        </Col>
                        <Col className=" pt-3 pb-5 solution-title">
                            <Row>
                                <Col>
                                    <h1> Data Warehouse & Business Intelligent</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        Whether you are building a new Data Warehouse, or re-architecting and consolidating your existing data stores, Arwics offers a full spectrum of Data Warehousing Solutions and Services that span technology, tools, platforms and methodologies

                                    <br />We are also to help people and organisations make better data-driven decisions in an increasingly complex environment. Using leading software tools, our business intelligence consulting and development experts allow enterprises to easily obtain snapshot views of their sales, marketing, financial, supply chain and other departmental operational data.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className=" p-5" style={{ backgroundColor: "#E0E0E0" }} >
                        <Col className=" pt-3 pb-5 solution-title">
                            <Row>
                                <Col>
                                    <h1> Enterprise Application Development</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        We provide complete implementation process, starting with design and development, quality assurance testing, deployment, and post implementation services.

                                        <br />Arwics is strongly focused on creating customer oriented software applications. The development team minutely examines and analyses the existing processes of the clients. It does the gap analysis to ensure complete compatibility between existing system and custom developed application. The supplications are designed, tested and deployed to complete satisfaction of the clients
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} className="p-2">
                            <img src="https://arwics.com/wp-content/uploads/2019/09/infra.jpg" style={{ width: '100%', height: '100%' }} />
                        </Col>
                    </Row>
                    <Row className="p-5 " style={{ backgroundColor: "#FAFAFA" }} >
                        <Col lg={4} xs={12} className="p-2 ">
                            <img src="https://arwics.com/wp-content/uploads/2019/09/infra.jpg" style={{ width: '100%', height: '100%' }} />
                        </Col>
                        <Col className=" pt-3 pb-5 solution-title">
                            <Row>
                                <Col >
                                    <h1> Resources Management</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <p>
                                        As we have seen in this HR series for small businesses, there are some human resource requirements that are very important for small businesses. You need to hire the right people, offer competitive salaries and benefits, provide effective training, and more. But in most small businesses, resources are very limited. With little reserve to attract and many competing priorities, it is difficult to justify the costs of hiring a dedicated HR team. Thus, the HR function can be part-time responsibilities for other owners or managers, so they don’t always get the attention they deserve. In this scenario, outsourcing some or all of your HR functions to an external provider can give you a lot of sense
                                        <br/>
                                        IT Resources has quickly risen up to the partner of choice for many corporations; small and large. Our extensive experience in the field of information technology gives us a unique edge in identifying talent and resources and matching them to requirements and quality of our clients.

                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;