import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../../components/side/Follow/Follow';
import Contact from '../../../components/side/Contact/Contact';
import Support from '../../../components/side/Support/Support';
import Footer from '../../../components/Footer/Footer';



const NewsLayout = (props) => (
    <Aux>
        <Container>
            <Row>
                <Col lg={8} xs={12} >
                    <Posts {...props} />
                    <PaginationList/>
                </Col>
                <Col  lg={4} xs={12}>
                    <Row>  
                        <Col xs={12}>
                            <Follow /> 
                        </Col>                  
                        <Col xs={12}>
                            <Contact />
                        </Col>  
                        <Col xs={12}>
                            <Support />
                        </Col>                                         
                    </Row>    
                </Col>
            </Row>
        </Container>  
        <Footer/>           
    </Aux>
)



export default connect()(NewsLayout);