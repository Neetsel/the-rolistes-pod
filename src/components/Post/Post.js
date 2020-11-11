import React from 'react'
import { Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';

const Post = (props) => {
        

    return (
        
        <Col xs={12} >
            <Link to={props.location + '/'  + props.postName}>
                {/* '?w=656&h=300&crop=1' */}
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>{props.date}</p>            
                <div className={classes.mainArticle} dangerouslySetInnerHTML={{ __html: props.article }} />
            </Link>
        </Col>
    );
}

export default Post;
