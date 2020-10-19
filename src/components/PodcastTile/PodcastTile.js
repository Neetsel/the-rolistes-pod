import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const PodcastTile = (props) => {

    return (
        <Aux>
            <Col lg={4} md={6} xs={12} >
                <a href="">
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
                    
                </a>                
            </Col>
        </Aux>
    )
}

export default PodcastTile;