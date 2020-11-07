import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const LatestPodcast = (props) => {

    return (
        <Aux>
            <Col xs={12} md={6} lg={4} >
                {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={props.location + '2020/15/16/'  + props.postName}>
                    <img src="" alt=""/>
                    <div> 
                        {/* Overlay */}
                        <div>
                             {/* Overlay-text */}
                            <p>{props.date}</p>
                            {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                            
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                    
                </Link>               
            </Col>
        </Aux>
    )
}

export default LatestPodcast;