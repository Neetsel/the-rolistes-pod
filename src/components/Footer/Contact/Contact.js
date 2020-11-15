import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';

const Contact = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>                    
                    <div className={globalClasses.item_box}>
                        <h2 className={globalClasses.section_title}>Contact Us</h2>                    
                        <p>Email: rolistespod@gmail.com</p>
                        <p>Twitter: @rolistespod</p>
                        <p>Facebook: @rolistespod</p>
                    </div>
                </Col>
            </Row>
        </Aux>
    )
}

export default Contact;