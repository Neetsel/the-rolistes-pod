import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Article from '../../../components/Post/Post';
import classes from './AboutUsLayout.module.css';
import Posts from '../../../containers/Posts/Posts';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';
import globalClasses from '../../../App.module.css';

const AboutUsLayout = (props) => (
    <Aux>
        <Container>
            <Row>                                           
                <Col xs={12} className={[globalClasses.no_padding_right,globalClasses.no_padding_smallscreen].join(' ')} >                    
                    
                    <Posts 
                        {...props} 
                        type="ABOUT"/>  

                    <Posts 
                        {...props} 
                        type="THETEAM"/>  
                </Col>
            </Row>
        </Container>
        <Footer/>        
    </Aux>
)

export default AboutUsLayout;