import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';

const Contact = (props) => {
    return (
        <Aux>
            <Row>
                <Col xs={12}>                    
                    <div className={globalClasses.item_box_footer}>
                        <h2 className={globalClasses.section_title_footer}>Contact Us</h2>                    
                        <p>Email: </p>
                        <p>Twitter: @rolistespod</p>
                        <p>Facebook: @rolistespod</p>
                    </div>
                </Col>
            </Row>
        </Aux>
    )
}

export default Contact;