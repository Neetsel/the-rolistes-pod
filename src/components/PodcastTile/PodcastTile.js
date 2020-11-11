
import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './PodcastTile.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import imgTest from '../../assets/images/Episode_40_Ep.jpg';

const PodcastTile = (props) => {

    return (
        <Aux>
            <Col xs={12} md={6} lg={4} className={classes.cell} >
                {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={'/2020/15/16/'  + props.postName}>                                    
                    <img src={props.cover} alt=""/> 
                    {/* <img src={imgTest} alt=""/>  */}
                    <div className={classes.overlay}> 
                        <div className={classes.overlayText}>
                             <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{props.date}</div>
                            <p></p>
                            {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}                            
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                    
                </Link>               
            </Col>
        </Aux>
    )
}

export default PodcastTile;