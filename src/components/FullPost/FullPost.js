import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './FullPost.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    
    return (
        
        <Col xs={12} >

            <div className={globalClasses.item_box}>
                <h1 className={globalClasses.section_title}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.fullPost}/>     
            </div>                                   
        </Col>
    );
}

export default Post;
