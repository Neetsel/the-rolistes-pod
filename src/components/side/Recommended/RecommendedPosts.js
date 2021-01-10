import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './RecommendedPosts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecommendedPosts = (props) => {
    
    let recommendedPosts = <Spinner/>
    const relatedPosts = [];

    recommendedPosts = relatedPosts.map (post => {
        return <Col xs={6} md={4} lg={6} className={classes.cell} key={post["id"]}>
            <Link>
                <img src={props.cover} alt="Cover Episode"/>
                <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{props.title}</h3>    
            </Link>
        </Col>;   
    });    
    
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recommended</h2>
                <Row>
                    {recommendedPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecommendedPosts;