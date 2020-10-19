import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const Contact = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>
                    <h2 class="section-title-side"><span class="text-title-side">Contact Us</span></h2>
                    <p>Email: rolistespod@gmail.com</p>
                    <p>Twitter: @rolistespod</p>
                    <p>Facebook: @rolistespod</p>
                </Col>
            </Row>
        </Aux>
    )
}

export default Contact;