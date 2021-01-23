import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './TeamPost.module.css';
import globalClasses from '../../App.module.css';
import { Col, Row } from 'react-bootstrap';

const TeamPost = (props) => {

    return (
        
        <Aux> 
            <div className={globalClasses.item_box_left} >               
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>  
                <Row>
                    <Col xs={12} md={4}>
                        <img src={props.cover} alt=""/>
                    </Col>
                    <Col xs={12} md={8}>                        
                        <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.teamPost}/>  
                    </Col>
                </Row>                   
            </div>                                   
        </Aux>
    );
}

export default TeamPost;
