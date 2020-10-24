import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import FullPost from '../../components/FullPost/FullPost';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Row } from 'react-bootstrap';

const Posts = props => {

    const { onFetchPosts } = props;

    useEffect(()=> {
        onFetchPosts(props.token, props.userId);
    }, [onFetchPosts]);

    const searchPost = ( posts, pageTitle) => {
        return 0;
    }
    
    let posts = <Spinner />;
    let key = 0;
    console.log(props.loading);
    if(!props.loading){
        
        switch (props.type){
            case "NEWS":
                posts = props.news.map(news => (
                    <Post
                        key= {news.id}
                        author= {news["dc:creator"][0]}
                        title= {news["title"]}
                        article= {news["content:encoded"][0]}
                        date= {news["pubDate"][0]}/>            
                    ));
                break;
            
            case "PODCAST":
                posts =props.podcast.map ( podcast => (                               
                    <PodcastTile 
                        key= {podcast.id}
                        date= {podcast["pubDate"][0]}
                        title= {podcast["title"]}
                        content= {podcast["content:encoded"][0]}/>           
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
                        article= {news[key]["content:encoded"][0]}
                        date= {news[key]["pubDate"][0]}/>;
                break;

            case "FULLPODCAST":
                key = searchPost(props.podcast, props.pageTitle);
                const podcast= props.podcast;
                console.log(podcast);
                if(podcast.length>0){
                    posts =                          
                    <FullPost 
                        key= {podcast[key].id}
                        date= {podcast[key]["pubDate"][0]}
                        title= {podcast[key]["title"]}
                        content= {podcast[key]["content:encoded"][0]}/>;
                }                
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch (actions.fetchPosts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Posts);