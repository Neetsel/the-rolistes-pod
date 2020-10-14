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
        orders =props.orders.map(order => (
            <Post 
                key={order.id}
                ingredients={order.ingredients}
                price={order.price} />
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
        posts: state.post.posts,
        loading: state.post.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch (actions.fetchPosts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Posts, axios));