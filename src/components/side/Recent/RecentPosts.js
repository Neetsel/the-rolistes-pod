import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecentPosts.module.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecentPosts = (props) => {
    
    let recentPosts = <Spinner/>
    const relatedPosts = props.recentPosts;

    recentPosts = relatedPosts.map (post => {
        return <Col xs={12} className={classes.cell} key={post["id"]}>
            <Link  to={post.location + 'news/' + post["wp:post_name"][0]}>
                <div className={classes.post_recent}>
                    <img src={post.cover} alt="Episode Cover" className={classes.recent_img}/>              
                    <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {post["pubDate"][0]}</div>
                    <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{post["title"]}</h3>      
                </div>
            </Link>    
        </Col>;
    });
       
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recent Podcasts</h2>
                <Row>
                    {recentPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecentPosts;