import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './FullPost.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    
    return (
        
        <Col xs={12} className={globalClasses.no_padding_smallscreen}>
            <div className={globalClasses.item_box}>                
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.fullPost}/>     
            </div>                                   
        </Col>
    );
}

export default Post;
