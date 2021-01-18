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
                {/* <Col xs={3} lg={3}>                
                    <img src={kunzImg} alt="" className={classes.kunz_img} />                    
                </Col> */}
                <Col xs={12}>
                    <h2>Coming Soon - {props.latestComingSoon["title"]}</h2>
                    <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.latestComingSoon["pubDate"][0]}</div>
                    <Row>
                        <Col>
                            <div dangerouslySetInnerHTML={{ __html: props.latestComingSoon["content:encoded"][0] }}/>
                        </Col>
                    </Row>    
                </Col> 

            </Row>
                
        </div>
                
    </Aux>
)

export default ComingSoon;