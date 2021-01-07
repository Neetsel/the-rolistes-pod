import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../../App.module.css';
import classes from './RecommendedPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecommendedPost = (props) => {

    return(
        <Aux>
            <Col xs={6} md={4} lg={6} className={classes.cell} >
                <Link>
                    <img src={props.cover} alt="Cover Episode"/>
                    <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{props.title}</h3>    
                </Link>
            </Col>                              
        </Aux>
    )    
}

export default RecommendedPost;