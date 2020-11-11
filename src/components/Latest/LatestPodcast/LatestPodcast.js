import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LatestPodcast.module.css';
import globalClasses from '../../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
                <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{podcast[0].date}</div>
                {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}                
                <h1>{podcast[0].title}</h1>
              
            </div>
            
        </Link>  ;

    podcast.shift();

    const podcastSecondaryOutput = podcast.map(podcast => {
        return <Col xs={12} md={6} key={podcast.key}>
            {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={podcast.location + '2020/15/16/'  + podcast.postName}>
                    <img src="" alt=""/>                                            
                    <div>
                        <div className={classes.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{podcast.date}</div>
                        {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                        
                        <h1>{podcast.title}</h1>
                    </div>
                </Link>              
            </Col>;
    });

    return (
        <Aux>
            <div className={globalClasses.item_box}>
                <h2 className={globalClasses.section_title}>Podcast Latest</h2>
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
            </div>
            
            
        </Aux>
    )
}

export default LatestPodcast;