import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import FullPost from '../../components/FullPost/FullPost';
import LatestNews from '../../components/Latest/LatestNews/LatestNews';
import LatestPodcast from '../../components/Latest/LatestPodcast/LatestPodcast';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import RecommendedPosts from '../../components/side/Recommended/RecommendedPosts';
import RecentPosts from '../../components/side/Recent/RecentPosts';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const Posts = props => {

    let sizePodcast = 1;    
    let posts = <Spinner />;
    let key = 0;
    let location = useLocation();    

    const searchPost = ( posts, pageTitle ) => {

        for (let i = 0; i < posts.length; i++){
            if(posts[i]["wp:post_name"][0]===pageTitle){
                return i;
            }
        }                
    }

    const searchLatest = ( posts, amountToReturn ) => {

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

    const searchPostsBasedOnCategory = (posts, category) => {

        const postsFromCategory = [];

        for(let i=0;i<posts.length;i++){

            for (let j=0; j < posts[i]["category"].length; j++) {
                                    
                if(posts[i]["category"][j]["$"]["nicename"]===category){
                                            
                    postsFromCategory.push(posts[i]);
                }
            }    
        }          
        
        sizePodcast = postsFromCategory.length;
        return postsFromCategory
    }

    useEffect(()=> {
        if (props.type ==="PODCAST"){
            props.onSetCurrentCategorySize(sizePodcast);        
        }        
    },[props.podcast,props.currentCategoryPodcast]);

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
    
    if(!props.loading & props.loaded){
        
        switch (props.type){
            case "NEWS":
                const currentNews = props.news.slice(props.indexOfFirstPost,props.indexOfLastPost)
                
                posts = currentNews.map(news => (
                    <Post
                        key= {news.id}
                        cover={news.cover}
                        excerpt= {news.excerpt} 
                        author= {news["dc:creator"][0]}                                           
                        title= {news["title"]}
                        article= {news["content:encoded"][0]}
                        date= {news["pubDate"][0]}
                        postName={news["wp:post_name"][0]}
                        location = {location["pathname"]}/>            
                    ));
                break;

            case "GONDO":
                const currentParisGondo = props.gondo.slice(props.indexOfFirstPost,props.indexOfLastPost)
                
                posts = currentParisGondo.map(gondo => (
                    <Post
                        key= {gondo.id}
                        cover={gondo.cover}
                        excerpt= {gondo.excerpt} 
                        author= {gondo["dc:creator"][0]}                                           
                        title= {gondo["title"]}
                        article= {gondo["content:encoded"][0]}
                        date= {gondo["pubDate"][0]}
                        postName={gondo["wp:post_name"][0]}
                        location = {location["pathname"]}/>            
                    ));
                break;
            
            case "PODCAST":                                
                const currentPodcast = searchPostsBasedOnCategory(props.podcast, props.filterCategory)
                    .slice(props.indexOfFirstPost,props.indexOfLastPost);
                
                posts =currentPodcast.map ( podcast => (                               
                    <PodcastTile 
                        key= {podcast.id}
                        cover={podcast.cover}
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
                        cover={news[key].cover}
                        author= {news[key]["dc:creator"][0]}
                        title= {news[key]["title"]}
                        content= {news[key]["content:encoded"][0]}
                        date= {news[key]["pubDate"][0]}/>;
                break;

            case "INTROGONDO":
                const introGondo= props.introGondo;
                // posts =                          
                //     <FullPost 
                //         key= {introGondo[0].id}
                //         cover={introGondo[0].cover}
                //         author= {introGondo[0]["dc:creator"][0]}
                //         title= {introGondo[0]["title"]}
                //         content= {introGondo[0]["content:encoded"][0]}
                //         date= {introGondo[0]["pubDate"][0]}/>;
                break;

            case "FULLPODCAST":
                key = searchPost(props.podcast, props.pageTitle);
                const podcast= props.podcast;                               
                posts =                          
                <FullPost 
                    key= {podcast[key].id}
                    cover={podcast[key].cover}
                    author= {podcast[key]["dc:creator"][0]}
                    date= {podcast[key]["pubDate"][0]}
                    title= {podcast[key]["title"]}
                    content= {podcast[key]["content:encoded"][0]}/>;                                 
                break;

            case "LATEST":
                
                const latestNews= searchLatest(props.news, 5); 
                const latestPodcast= searchLatestPodcast(props.podcast, 5);
                const latestComingSoon = props.comingSoon[0];

                posts = 
                <Aux>
                    {/* post={props.comingSoon[0]} */}
                    <ComingSoon latestComingSoon={latestComingSoon} />                    
                    <LatestPodcast 
                    podcast={latestPodcast} 
                    location = {location["pathname"]}/> 
                    <LatestNews 
                    news={latestNews} 
                    location = {location["pathname"]}/> 
                </Aux>                                                          
                break;

            case "RECENT":
                let recentPosts= searchLatest(props.podcast, 6);                            

                posts = <RecentPosts
                    recentPosts={recentPosts}
                    location = {location["pathname"]}/>;
                break;

            case "RECOMMENDED":
                const recommendedPosts= props.introGondo;
                posts = <RecommendedPosts
                    recommendedPosts={recommendedPosts}
                    location = {location["pathname"]}/>;                
                break;
    
    
                   
        }        
    }

    return (
        <Aux>
            {posts}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        podcast: state.posts.podcast,
        gondo: state.posts.gondo,
        introGondo: state.posts.introGondo,
        comingSoon: state.posts.comingSoon,
        loading: state.posts.loading,
        loaded: state.posts.loaded,
        currentCategoryPodcast: state.posts.currentCategoryPodcast
    };
};

const mapDispatchToProps = dispatch => {
    return {      
        onSetCurrentCategorySize: (size) => dispatch (actions.setCurrentCategorySize(size))    
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Posts);