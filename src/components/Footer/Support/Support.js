import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import paypalButton from '../../../assets/images/paypal-button.png';
import patreonButton from '../../../assets/images/patreon-button.png';
import classes from './Support.module.css';
import globalClasses from '../../../App.module.css';

const Support = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>

                    <div className={globalClasses.item_box}>
                        <h2 className={globalClasses.section_title}>Support Us</h2>
                        <a href="https://www.patreon.com/RolistesPod"><img src={patreonButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                              
                        <a href="https://www.paypal.com/paypalme/rolistespod/"><img src={paypalButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                       
                    </div>
                </Col>               
            </Row>    
        </Aux>
    )
}

export default Support;