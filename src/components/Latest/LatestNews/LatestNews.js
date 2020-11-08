import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const LatestNews = (props) => {

    const news = [];

    for (let key in props.news){

        news.push(
            {
                key: props.news[key].id,
                date: props.news[key]["pubDate"][0],
                title: props.news[key]["title"],
                content: props.news[key]["content:encoded"][0],
                postName: props.news[key]["wp:post_name"][0],
                location: props.location ,
            }
        );
    }
    
    const newsMainOutput = <Link to={news[0].location + 'news/'  + news[0].postName}>
                <img src="" alt=""/>
                <div> 
                    {/* Overlay */}
                    <div>
                        {/* Overlay-text */}
                        <p>{news[0].date}</p>
                        {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                        
                        <h1>{news[0].title}</h1>
                        {/* {props.latest ? <h2>{props.summary}test</h2> : null } */}
                    </div>
                </div>                
            </Link>;


    news.shift();

    const newsSecondaryOutput = news.map(news => {
        return <Col xs={12} md={6} key={news.key}>
            {/* <Link to={props.location + '/'  + props.postName}> */}
                <Link to={news.location + 'news/'  + news.postName}>
                    <img src="" alt=""/>
                    <div> 
                        {/* Overlay */}
                        <div>
                            {/* Overlay-text */}
                            <p>{news.date}</p>
                            {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
                            
                            <h1>{news.title}</h1>
                            {/* {props.latest ? <h2>{props.summary}test</h2> : null } */}
                        </div>
                    </div>
                    
                </Link>               
            </Col>;
    });

    console.log(newsSecondaryOutput);

    return (
        <Aux>
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
            
        </Aux>
    )
}

export default LatestNews;