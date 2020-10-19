import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const Support = (props) => {
    return (
        <Aux>
            <Row>
                <h2 class="section-title-side"><span class="text-title-side">Support Us</span></h2>
                <Col xs={6}>
                    <a href="https://www.patreon.com/RolistesPod" class="support-link-side"><i class="fab fa-patreon icon-side support-icon" aria-hidden="true"></i></a>
                </Col>

                <Col xs={6}>
                    <a href="https://www.patreon.com/RolistesPod" class="support-link-side"><i class="fab fa-paypal icon-side support-icon" aria-hidden="true"></i></a>
                </Col>                    
            </Row>    
        </Aux>
    )
}

export default Support;