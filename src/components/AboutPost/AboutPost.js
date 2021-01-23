import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './AboutPost.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const AboutPost = (props) => {

    return (
        
        <Aux>
            <div className={globalClasses.item_box_left} >               
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.fullPost}/>     
            </div>                                   
        </Aux>
    );
}

export default AboutPost;
