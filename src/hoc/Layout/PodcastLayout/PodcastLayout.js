import React, { useEffect } from 'react';
import Aux from '../../Auxiliary/Auxiliary';

import classes from './PodcastLayout.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';
import Footer from '../../../components/Footer/Footer';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

const PodcastLayout = (props) => {

    const postPerPage = 18;
    const indexOfLastPost = props.currentPagePodcast * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const categories =["podcast","the-rolistes-podcast","the-rolistes-present","cafe-rolistes","film-studies"];
    // need to convert this with use effect

    useEffect(() => {
        props.onSetCurrentPagePodcast(1)
      }, [])

    const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);

    return (
        <Aux>
        <Container>
            <Row>
                <Col xs={12} >
                    <Posts {...props} 
                        type="PODCAST"
                        filterCategory={categories[0]}
                        indexOfFirstPost={indexOfFirstPost} 
                        indexOfLastPost={indexOfLastPost}/>
                    <PaginationList
                        totalRecords={props.podcast.length} 
                        pageLimit={postPerPage} 
                        paginate={paginate}
                        currentPage={props.currentPagePodcast}/>
                </Col>
            </Row>
        </Container> 
        
        <Footer/>
             
    </Aux>
    )    
}

const mapStateToProps = state => {
    return {
        podcast: state.posts.podcast,
        currentPagePodcast: state.posts.currentPagePodcast
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPagePodcast: (pageNumber) => dispatch (actions.setCurrentPagePodcast(pageNumber))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(PodcastLayout);