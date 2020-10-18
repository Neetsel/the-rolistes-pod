import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import PodcastTile from '../../components/PodcastTile/PodcastTile';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

const PodcastTiles = (props) => {

    const { onFetchPosts } = props;

    useEffect(()=> {
        onFetchPosts(props.token, props.userId);
    }, [onFetchPosts]);
    
    let tiles = <Spinner />;
 
    if(!props.loading){
        tiles = props.podcast.map ( podcast => (                               
            <PodcastTile 
                key= {podcast.id}
                date= {podcast["pubDate"][0]}
                title= {podcast["title"]}/>    
        ))
    }   

    return (
        <Aux>
            <Row>
                {tiles}                
            </Row>
        </Aux>
    )    
}

const mapStateToProps = state => {
    return {
        podcast: state.posts.podcast,
        loading: state.posts.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch (actions.fetchPosts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(PodcastTiles);