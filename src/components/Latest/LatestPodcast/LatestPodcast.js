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

        const tempDate = new Date(props.podcast[key]["pubDate"][0]);   

        podcast.push(
            {
                key: props.podcast[key].id,
                cover: props.podcast[key].cover,
                date: props.podcast[key]["pubDate"][0],
                title: props.podcast[key]["title"],
                content: props.podcast[key]["content:encoded"][0],
                postName: props.podcast[key]["wp:post_name"][0],
                location: props.location,
                year:tempDate.getFullYear(),
                month:tempDate.getMonth()+1,
                day:tempDate.getDate()
            }
        );
    }
    
    const podcastMainOutput = 
        <Aux>
            <Link to={podcast[0].location + podcast[0].year + '/' + podcast[0].month + '/' + podcast[0].day + '/' + podcast[0].postName}>
                <div className={globalClasses.img_scale_animate}>                
                    <img src={podcast[0].cover} alt=""/> 
                </div>
            </Link> 
            <div>                                                 
                <div>Latest Release: <span className={globalClasses.date_home}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {podcast[0].date}</span></div>
                <Link to={podcast[0].location + podcast[0].year + '/' + podcast[0].month + '/' + podcast[0].day + '/' + podcast[0].postName}>
                    <h3 className={globalClasses.title_home_secondary}>{podcast[0].title}</h3>
                </Link> 
            </div>        
        </Aux>;

    podcast.shift();

    const podcastSecondaryOutput = podcast.map(podcast => {
        return <Col xs={12} md={6} key={podcast.key}>
            {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={podcast.location + podcast.year + '/' + podcast.month + '/' + podcast.day + '/' + podcast.postName}>
                    <div className={globalClasses.img_scale_animate}>  
                        <img src={podcast.cover} alt=""/>
                    </div>                                           
                </Link>     
                        {/* <div className={classes.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{podcast.date}</div> */}
                <Link to={podcast.location + podcast.year + '/' + podcast.month + '/' + podcast.day + '/' + podcast.postName}>   
                    <h3 className={globalClasses.title_home_secondary}>{podcast.title}</h3>
                    
                </Link>              
            </Col>;
    });

    return (
        <Aux>
            <div className={globalClasses.item_box}>
            <h2 className={globalClasses.section_title}>Latest Podcast</h2>
                <Row>
                    <Col xs={12} lg={6}>
                        {podcastMainOutput}
                    </Col>
                    <Col xs={12} lg={6}>
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