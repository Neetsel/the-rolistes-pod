import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import classes from './PodcastLayout.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import PodcastTiles from '../../../components/PodcastTiles/PodcastTiles';
import Footer from '../../../components/Footer/Footer';

const PodcastLayout = (props) => (
    <Aux>
        <Container>
            <Row>
                <Col xs={12} >
                    <PodcastTiles/>
                </Col>
            </Row>
        </Container> 
        
        <Footer/>
             
    </Aux>
)

export default PodcastLayout;