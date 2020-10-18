import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';

const Post = (props) => {
    
    return (
        
        <Col xs={12} >
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>{props.date}</p>            
            <div dangerouslySetInnerHTML={{ __html: props.article }} />
        </Col>
    );
}

export default Post;
