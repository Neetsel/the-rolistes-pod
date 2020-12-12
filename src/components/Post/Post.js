import React from 'react'
import { Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';
import globalClasses from '../../App.module.css'

const Post = (props) => {    

    return (
        
        <Col xs={12} className={globalClasses.article_preview}>
            <Link to={props.location + '/'  + props.postName}>
                <img src={props.cover + '?w=2237&h=1173&crop=1'} alt=""/>             
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>{props.date}</p>            
                {/* <div className={classes.mainArticle} dangerouslySetInnerHTML={{ __html: props.article }} /> */}
                <p>{props.excerpt}... <span>Continue reading</span></p>
            </Link>
                <span className={classes.end_article}/>
        </Col>
    );
}

export default Post;
