import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const PodcastTile = (props) => {

    return (
        <Aux>
            <Col xs={12} md={6} lg={4} >
                <Link to={props.location + '/'  + props.postName}>
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

export default PodcastTile;