import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './ComingSoon.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import kunzImg from '../../assets/images/rollinKunzArt/RollinKunz_Astro.png';

const ComingSoon = (props) => (
    <Aux>
 
            
            
                <div className={[globalClasses.item_box, classes.item_box_comingsoon].join(' ')}>
                    <Row>
                        <Col xs={3} lg={3}>                
                            <img src={kunzImg} alt="" className={classes.kunz_img} />                    
                        </Col>
                        <Col xs={9} lg={9}>
                            <h2>Coming Soon</h2>
                            <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> 09 July, 2020 1pm EDT (6pm BST)</div>
                            <Row>
                                <Col>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros erat, pellentesque vitae consectetur ac, sagittis a magna. Vivamus dolor est, bibendum vel lectus nec, lobortis lacinia arcu. Nunc eleifend maximus felis, vel aliquam mi. Sed a elit lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </Col>
                            </Row>    
                        </Col> 

                    </Row>
                       
                </div>

        
        
    </Aux>
)

export default ComingSoon;