import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';


const Posts = props => {

    const { onFetchPosts } = props;

    useEffect(()=> {
        onFetchPosts(props.token, props.userId);
    }, [onFetchPosts]);
    
    let posts = <Spinner />;
    if(!props.loading){
        posts =props.news.map(news => (
            <Post
                key= {news.id}
                author= {news["dc:creator"][0]}
                title= {news["title"]}
                article= {news["content:encoded"][0]}
                date= {news["pubDate"][0]}/>            
        ))
    }

    

    return (
        <div>
            {posts}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        loading: state.posts.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch (actions.fetchPosts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Posts);