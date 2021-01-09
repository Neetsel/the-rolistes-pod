import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecentPosts.module.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecentPosts = (props) => {
    
    let recentPosts = <Spinner/>
    const relatedPosts = [];

    recentPosts = relatedPosts.map (post => {
        return <Col xs={6} md={4} lg={6} className={classes.cell} >
            <Link>
                <img/>
                <div>
                    <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                    <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{props.title}</h3>      
                </div>
            </Link>    
        </Col>;
    });
       
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recent</h2>
                <Row>
                    {recentPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecentPosts;