import React from 'react'
import { Col, Row } from 'react-bootstrap';
import PodcastTile from './PodcastTile/PodcastTile';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const PodcastTiles = (props) => {

    return (
        <Aux>
            <Row>
                <Col lg={8} md={6} xs={12} >
                    <PodcastTile />
                </Col>
            </Row>
        </Aux>
    )
}

export default PodcastTiles;