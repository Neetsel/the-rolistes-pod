import React, { useEffect } from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Button from '../../../components/UI/Button/Button';
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
    let selectedCategory = 0;
    // need to convert this with use effect

    useEffect(() => {
        props.onSetCurrentPagePodcast(1)
      }, [])

    const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);
    
    const filterAll = () => selectedCategory = 0;
    const filterRolistesPod = () => selectedCategory = 1;
    const filterRolistesPresent = () => selectedCategory = 2;
    const filterCafeRolistes = () => selectedCategory = 3;
    const filterFilmStudies = () => selectedCategory = 4;

    return (
        <Aux>
        <Container>
            <Button type="TOGGLE" clicked ={filterAll}>ALL</Button>
            <Button type="TOGGLE" clicked ={filterRolistesPod}>Rolistes Pod</Button>
            <Button type="TOGGLE" clicked ={filterRolistesPresent}>Rolistes Present</Button>
            <Button type="TOGGLE" clicked ={filterCafeRolistes}>Cafe Rolistes</Button>
            <Button type="TOGGLE" clicked ={filterFilmStudies}>Film Studies</Button>
            <Row>
                <Col xs={12} >
                    <Posts {...props} 
                        type="PODCAST"
                        filterCategory={categories[selectedCategory]}
                        indexOfFirstPost={indexOfFirstPost} 
                        indexOfLastPost={indexOfLastPost}/>
                    <PaginationList
                        totalRecords={props.podcast.length} 
                        pageLimit={postPerPage} 
                        clicked={paginate}
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