import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LatestNews.module.css';
import globalClasses from '../../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const LatestNews = (props) => {

    const news = [];

    for (let key in props.news){

        news.push(
            {
                key: props.news[key].id,
                cover: props.news[key].cover,
                date: props.news[key]["pubDate"][0],
                title: props.news[key]["title"],
                content: props.news[key]["content:encoded"][0],
                postName: props.news[key]["wp:post_name"][0],
                location: props.location ,
            }
        );
    }
    
    const newsMainOutput = <Link to={news[0].location + 'news/'  + news[0].postName}>
                <img src={news[0].cover + '?w=656&h=300&crop=1'} alt=""/> 
                <div>   
                    <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{news[0].date}</div>
                    
                    <h3>{news[0].title}</h3>

                </div>                
            </Link>;


    news.shift();

    const newsSecondaryOutput = news.map(news => {
        return <Col xs={12} md={6} key={news.key}>
                <Link to={news.location + 'news/'  + news.postName}>
                    <img src={news.cover + '?w=656&h=300&crop=1'} alt=""/> 
                    <div>                                                 
                        <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/>{news.date}</div>
                        
                        <h3>{news.title}</h3>
                 
                    </div>
                    
                </Link>               
            </Col>;
    });

    console.log(newsSecondaryOutput);

    return (
        <Aux>
            <div className={globalClasses.item_box}>
                <h2 className={globalClasses.section_title}>News Latest</h2>
                <Row>                    
                    <Col xs={12} lg={5}>
                        {newsMainOutput}
                    </Col>
                    <Col xs={12} lg={7}>
                        <Row>
                            {newsSecondaryOutput}
                        </Row>
                    </Col>
                </Row>
            </div>
        </Aux>
    )
}

export default LatestNews;