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



const NewsLayout = (props) => (
    <Aux>
        <Container>
            <Row>
                <Col xs={12} lg={8}>
                    <Posts {...props} />
                    <PaginationList/>
                </Col>
                <Col xs={12} lg={8}>
                    <Follow />                    
                    <Contact />
                    <Support />
                </Col>
            </Row>
        </Container>             
    </Aux>
)



export default connect()(NewsLayout);