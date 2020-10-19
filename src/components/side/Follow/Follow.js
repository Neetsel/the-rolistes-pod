import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const Follow = (props) => {
    return (
        <Aux>           
            <Row>
                <Col xs={12}>
                    <h2 class="section-title-side"><span class="text-title-side">Stay Connected</span></h2>
                </Col>
            </Row>
            <Row>
                <h3>Follow</h3>
                <Col xs={3}>
                    <a href="https://www.facebook.com/Rolistespod/" class="side-link"><i class="fab fa-facebook-f icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                    <a href="https://twitter.com/rolistespod" class="side-link"><i class="fab fa-twitter icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                    <a href="https://www.instagram.com/rolistespod/?hl=en" class="side-link"><i class="fab fa-instagram icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                <a href="https://www.tiktok.com/@rolistespod?lang=en" class="side-link"><i class="fab fa-tiktok icon-side" aria-hidden="true"></i></a>
                </Col>
            </Row>
            <Row>
            <h3>Listen</h3>
                <Col xs={3}>
                    <a href="https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A" class="side-link"><i class="fa fa-spotify icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                    <a href="https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191" class="side-link"><i class="fa fa-apple icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                    <a href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg" class="side-link"><i class="fab fa-youtube icon-side" aria-hidden="true"></i></a>
                </Col>

                <Col xs={3}>
                    <a href="http://www.stitcher.com/podcast/the-rolistes-podcast" class="side-link"><i class="fa fa-podcast icon-side" aria-hidden="true"></i></a>
                </Col>
            </Row>
        </Aux>
    )
}

export default Follow;