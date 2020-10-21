import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import paypalButton from '../../../assets/images/paypal-button.png';
import patreonButton from '../../../assets/images/patreon-button.png';
import classes from './Support.module.css';

const Support = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>
                    <h2><span>Support Us</span></h2>
                </Col>
                
                <Col xs={12}>
                    <a href="https://www.patreon.com/RolistesPod"><img src={patreonButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                </Col>

                <Col xs={12}>
                    <a href="https://www.paypal.com/paypalme/rolistespod/"><img src={paypalButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                </Col>                    
            </Row>    
        </Aux>
    )
}

export default Support;