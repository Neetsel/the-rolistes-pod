import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import FullPost from '../../components/FullPost/FullPost';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Posts = props => {

    const { onFetchPosts } = props;

    useEffect(()=> {
        if(!props.loaded){
            onFetchPosts();
        }        
    }, []);   

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
                    content= {podcast[key]["content:encoded"][0]}/>;                    ;             
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

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch (actions.fetchPosts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Posts);