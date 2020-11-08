import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const LatestPodcast = (props) => {

    const podcast = [];

    for (let key in props.podcast){

        podcast.push(
            {
                key: props.podcast[key].id,
                date: props.podcast[key]["pubDate"][0],
                title: props.podcast[key]["title"],
                content: props.podcast[key]["content:encoded"][0],
                postName: props.podcast[key]["wp:post_name"][0],
                location: props.location ,
            }
        );
    }
    
    const podcastMainOutput = 
        <Link to={podcast[0].location + '2020/15/16/'  + podcast[0].postName}>
            <img src="" alt=""/>
            <div> 
                {/* Overlay */}
                <div>
                    {/* Overlay-text */}
                    <p>{podcast[0].date}</p>
                    {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                    
                    <h1>{podcast[0].title}</h1>
                </div>
            </div>
            
        </Link>  ;

    podcast.shift();

    const podcastSecondaryOutput = podcast.map(podcast => {
        return <Col xs={12} md={6} key={podcast.key}>
            {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={podcast.location + '2020/15/16/'  + podcast.postName}>
                    <img src="" alt=""/>
                    <div> 
                        {/* Overlay */}
                        <div>
                             {/* Overlay-text */}
                            <p>{podcast.date}</p>
                            {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                            
                            <h1>{podcast.title}</h1>
                        </div>
                    </div>
                    
                </Link>              
            </Col>;
    });

    return (
        <Aux>
            <Row>
            <Col xs={12} lg={5}>
                {podcastMainOutput}
            </Col>
            <Col xs={12} lg={7}>
                <Row>
                    {podcastSecondaryOutput}
                </Row>
            </Col>
            </Row>
            
        </Aux>
    )
}

export default LatestPodcast;