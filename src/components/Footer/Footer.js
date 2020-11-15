import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Footer.module.css'
import Contact from './Contact/Contact';
import Follow from './Follow/Follow';
import Support from './Support/Support';

const Footer = (props) => {

    window.onscroll = function() {toggleFooter(this)};

	const toggleFooter = () => {
        
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("dynamicFooter").className = classes.navUp;
	  } else {
	    document.getElementById("dynamicFooter").className = classes.navDown;
	  }
    };

    return (
        <Aux>
            <footer>
                <Container className={classes.footer}>
                    <Row>
                        <Col lg={4} xs={12}>
                            <Follow/>
                        </Col>                             
                        <Col lg={4} md={6} xs={12}>
                            <Support/>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <Contact/>
                        </Col>                                           
                    </Row>                    
                </Container>

                <div id="dynamicFooter">
                    <a href="#top" className={classes.topLink}><FontAwesomeIcon icon={faArrowUp} aria-hidden="true"/></a>
                </div>

            </footer>
            
        </Aux>
    )
}

export default Footer;