import React from 'react';
import { Row, Col, Jumbotron,  } from 'react-bootstrap';

const Footer = () => {
    return ( 
       <Row >
           <Col style={{height:70,backgroundColor:'#263238',fontSize:12}} className=" text-light text-center pt-4" >Copyright-Arwics @ 2020</Col>
       </Row>
     );
}
 
export default Footer;