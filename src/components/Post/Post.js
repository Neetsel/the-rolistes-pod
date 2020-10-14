import React from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';

const Post = (props) => {
    

    return (
        <div >
            <p>Author {props.author}</p>
            <p>Date {props.date}</p>
            <h1>Title {props.title}</h1>
            <p>Article Preview{props.article}</p>
        </div>
    );

}


export default Post;
