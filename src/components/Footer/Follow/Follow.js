import { faApple, faFacebookF, faInstagram, faItunes, faSpotify, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './Follow.module.css'
import { Row, Col } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';


const Follow = (props) => {

    

    return (
        <Aux>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Stay Connected</h2>                     
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={6} xs={12}>
                        <h3>Follow</h3>
                    
                        <Row>
                            <Col xs={3}>
                                <a href="https://www.facebook.com/Rolistespod/" className={classes.FooterLink}><span><FontAwesomeIcon icon={faFacebookF} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="https://twitter.com/rolistespod" className={classes.FooterLink}><span><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="https://www.instagram.com/rolistespod/?hl=en" className={classes.FooterLink}><span><FontAwesomeIcon icon={faInstagram} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="https://www.tiktok.com/@rolistespod?lang=en" className={classes.FooterLink}><span><FontAwesomeIcon icon={faTiktok} aria-hidden="true"/></span></a>
                            </Col>
                        </Row>
                    </Col>
                    
                
                    <Col lg={12} sm={6} xs={12}>
                        <h3>Listen</h3>                    
                        <Row>
                            <Col xs={3}>
                                <a href="https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A" className={classes.FooterLink}><span><FontAwesomeIcon icon={faSpotify} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191" className={classes.FooterLink}><span><FontAwesomeIcon icon={faApple} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg" className={classes.FooterLink}><span><FontAwesomeIcon icon={faYoutube} aria-hidden="true"/></span></a>
                            </Col>

                            <Col xs={3}>
                                <a href="http://www.stitcher.com/podcast/the-rolistes-podcast" className={classes.FooterLink}><span><FontAwesomeIcon icon={faPodcast} aria-hidden="true"/></span></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                
            </div>                    
        </Aux>
    )
}

export default Follow;