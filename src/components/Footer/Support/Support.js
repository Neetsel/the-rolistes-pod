import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import paypalButton from '../../../assets/images/Paypal Donate BnW - Black.png';
import patreonButton from '../../../assets/images/become_a_patron_button_BnW - Black.png';
import DriveThruRPGButton from '../../../assets/images/DriveThruRPG_BnW_Option A - Black.png';
import classes from './Support.module.css';
import globalClasses from '../../../App.module.css';

const Support = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>

                    <div className={globalClasses.item_box_footer}>
                        <h2 className={globalClasses.section_title_footer}>Support Us</h2>
                        <a href="https://www.patreon.com/RolistesPod" className={classes.supportLink}><img src={patreonButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                              
                        <a href="https://www.paypal.com/paypalme/rolistespod/" className={classes.supportLink}><img src={paypalButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                       
                        <a href="https://www.paypal.com/paypalme/rolistespod/" className={classes.supportLink}><img src={DriveThruRPGButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                       
                    </div>
                </Col>               
            </Row>    
        </Aux>
    )
}

export default Support;