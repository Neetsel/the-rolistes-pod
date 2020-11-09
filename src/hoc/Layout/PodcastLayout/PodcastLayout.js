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

    const postPerPage = 24;
    const indexOfLastPost = props.currentPagePodcast * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    
    // need to convert this with use effect

    useEffect(() => {
        props.onSetCurrentPagePodcast(1);
        props.onSetCurrentCategoryPodcast("podcast");
      }, [])

    const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);
    
    const filterAll = () => props.onSetCurrentCategoryPodcast("podcast");
    const filterRolistesPod = () => props.onSetCurrentCategoryPodcast("the-rolistes-podcast");
    const filterRolistesPresent = () => props.onSetCurrentCategoryPodcast("the-rolistes-present");
    const filterCafeRolistes = () => props.onSetCurrentCategoryPodcast("cafe-rolistes");
    const filterFilmStudies = () => props.onSetCurrentCategoryPodcast("film-studies");
 
    return (
        <Aux>
            <Container>
                <Button type="TOGGLE" clicked ={filterAll}>ALL</Button>
                <Button type="TOGGLE" clicked ={filterRolistesPod}>The Rolistes Podcast</Button>
                <Button type="TOGGLE" clicked ={filterRolistesPresent}>The Rolistes Present</Button>
                <Button type="TOGGLE" clicked ={filterCafeRolistes}>Cafe Rolistes</Button>
                <Button type="TOGGLE" clicked ={filterFilmStudies}>Film Studies</Button>
                <Row>
                    <Col xs={12} >
                        <Posts {...props} 
                            type="PODCAST"
                            filterCategory={props.currentCategoryPodcast}
                            indexOfFirstPost={indexOfFirstPost} 
                            indexOfLastPost={indexOfLastPost}/>
                        <PaginationList
                            // totalRecords={props.podcast.length} 
                            totalRecords={props.currentCategorySize} 
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
        currentPagePodcast: state.posts.currentPagePodcast,
        currentCategoryPodcast: state.posts.currentCategoryPodcast,
        currentCategorySize: state.posts.currentCategorySize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPagePodcast: (pageNumber) => dispatch (actions.setCurrentPagePodcast(pageNumber)),
        onSetCurrentCategoryPodcast: (category) => dispatch (actions.setCurrentCategoryPodcast(category))    
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(PodcastLayout);