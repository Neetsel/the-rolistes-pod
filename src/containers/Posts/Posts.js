import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import FullPost from '../../components/FullPost/FullPost';
import LatestNews from '../../components/Latest/LatestNews/LatestNews';
import LatestPodcast from '../../components/Latest/LatestPodcast/LatestPodcast';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Posts = props => {

    const searchPost = ( posts, pageTitle ) => {

        console.log("Start Test");
        for (let i = 0; i < posts.length; i++){
            console.log(posts[i]["wp:post_name"][0]);
            if(posts[i]["wp:post_name"][0]===pageTitle){
                console.log("Found in: ", i);
                return i;
            }
        }                
    }

    const searchLatestNews = ( posts, amountToReturn ) => {

        const news = [];

        for(let i=0;i<amountToReturn;i++){
            news.push({
                ...posts[i],
                latest: i==0? true:false,
                id:i                                                
            })
        };

        return news;
    }

    const searchPostBasedOnCategory = (posts, category) => {

        for(let i=1;i<posts.length;i++){

            for (let j=0; j < posts[i]["category"].length; j++) {
                                    
                if(posts[i]["category"][j]["$"]["nicename"]===category){
                                            
                    return i;                        
                }
            }    
        }        
    }

    const searchLatestPodcast = ( posts, amountToReturn ) => {

        const podcast = [];

        podcast.push({            
            ...posts[0],
            latest: true,
            id:0                                                
        })

        const categories =["the-rolistes-podcast","the-rolistes-present","cafe-rolistes","film-studies"];

        let indexPost = 0;

        for(let i=0;i<categories.length;i++){

            indexPost = searchPostBasedOnCategory (posts,categories[i]);

            podcast.push({            
                ...posts[indexPost],
                latest: true,
                id: i+1                                                
            })
        }                   

        return podcast;            
    }
    
    
    let posts = <Spinner />;
    let key = 0;
    let location = useLocation();
    console.log(location);

    if(!props.loading & props.loaded){
        
        switch (props.type){
            case "NEWS":
                posts = props.news.map(news => (
                    <Post
                        key= {news.id}
                        author= {news["dc:creator"][0]}
                        title= {news["title"]}
                        article= {news["content:encoded"][0]}
                        date= {news["pubDate"][0]}
                        postName={news["wp:post_name"][0]}
                        location = {location["pathname"]}/>            
                    ));
                break;
            
            case "PODCAST":
                posts =props.podcast.map ( podcast => (                               
                    <PodcastTile 
                        key= {podcast.id}
                        date= {podcast["pubDate"][0]}
                        title= {podcast["title"]}
                        content= {podcast["content:encoded"][0]}
                        postName={podcast["wp:post_name"][0]}
                        location = {location["pathname"]}/>           
                    ));
                break;
            
            case "FULLNEWS":
                key = searchPost(props.news, props.pageTitle);
                const news= props.news;
                posts =                          
                    <FullPost 
                        key= {news[key].id}
                        author= {news[key]["dc:creator"][0]}
                        title= {news[key]["title"]}
                        content= {news[key]["content:encoded"][0]}
                        date= {news[key]["pubDate"][0]}/>;
                break;

            case "FULLPODCAST":
                key = searchPost(props.podcast, props.pageTitle);
                const podcast= props.podcast;                               
                posts =                          
                <FullPost 
                    key= {podcast[key].id}
                    author= {podcast[key]["dc:creator"][0]}
                    date= {podcast[key]["pubDate"][0]}
                    title= {podcast[key]["title"]}
                    content= {podcast[key]["content:encoded"][0]}/>;                                 
                break;

            case "LATEST":
                
                const latestNews= searchLatestNews(props.news, 5); 
                const latestPodcast= searchLatestPodcast(props.podcast, 5);
                
                posts = 
                <div>
                    <ComingSoon/>
                    <LatestNews 
                    news={latestNews} 
                    location = {location["pathname"]}/> 
                    <LatestPodcast 
                    podcast={latestPodcast} 
                    location = {location["pathname"]}/>  
                </div> 
                                                         
                break;
                   
        }        
    }

    return (
        <Row>
            {posts}
        </Row>
    );
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        podcast: state.posts.podcast,
        loading: state.posts.loading,
        loaded: state.posts.loaded
    };
};

export default connect(mapStateToProps)(Posts);