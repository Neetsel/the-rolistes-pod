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
import globalClasses from '../../../App.module.css';
import { useState } from 'react';

const PodcastLayout = (props) => {

    const postPerPage = 24;
    const indexOfLastPost = props.currentPagePodcast * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    
    const btnType = "filter"; 
    const [btnState, setBtnState] = useState({
        allIsDisabled: true,
        rolistesPodIsDisabled: false,
        rolistesPresentIsDisabled: false,
        cafeRolistesIsDisabled: false,
        filmStudiesIsDisabled: false
    });
    
    // need to convert this with use effect

    useEffect(() => {
        props.onSetCurrentPagePodcast(1);
        props.onSetCurrentCategoryPodcast("podcast");
      }, [])

    const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);
    
    const filterAll = () => {        
        props.onSetCurrentCategoryPodcast("podcast");
        setBtnState({
            allIsDisabled: true,
            rolistesPodIsDisabled: false,
            rolistesPresentIsDisabled: false,
            cafeRolistesIsDisabled: false,
            filmStudiesIsDisabled: false
        });
    } 

    const filterRolistesPod = () => {    
        props.onSetCurrentCategoryPodcast("the-rolistes-podcast");
        setBtnState({
            allIsDisabled: false,
            rolistesPodIsDisabled: true,
            rolistesPresentIsDisabled: false,
            cafeRolistesIsDisabled: false,
            filmStudiesIsDisabled: false
        });   
    }

    const filterRolistesPresent = () => {
        props.onSetCurrentCategoryPodcast("the-rolistes-present");
        setBtnState({
            allIsDisabled: false,
            rolistesPodIsDisabled: false,
            rolistesPresentIsDisabled: true,
            cafeRolistesIsDisabled: false,
            filmStudiesIsDisabled: false
        });  
    }

    const filterCafeRolistes = () => 
    {
        props.onSetCurrentCategoryPodcast("cafe-rolistes");
        setBtnState({
            allIsDisabled: false,
            rolistesPodIsDisabled: false,
            rolistesPresentIsDisabled: false,
            cafeRolistesIsDisabled: true,
            filmStudiesIsDisabled: false
        });  
    }
    const filterFilmStudies = () => {
        props.onSetCurrentCategoryPodcast("film-studies");
        setBtnState({
            allIsDisabled: false,
            rolistesPodIsDisabled: false,
            rolistesPresentIsDisabled: false,
            cafeRolistesIsDisabled: false,
            filmStudiesIsDisabled: true
        });  
    }
 
    return (
        <Aux>
            <Container>
                <div className={globalClasses.item_box}>
                    <h1 className={globalClasses.section_title}>Podcast</h1>
                    <div className={classes.filters}>
                        <Button btnType={btnType} disabled={btnState.allIsDisabled} clicked ={filterAll}>ALL</Button>
                        <Button btnType={btnType} disabled={btnState.rolistesPodIsDisabled} clicked ={filterRolistesPod}>The Rolistes Podcast</Button>
                        <Button btnType={btnType} disabled={btnState.rolistesPresentIsDisabled} clicked ={filterRolistesPresent}>The Rolistes Present</Button>
                        <Button btnType={btnType} disabled={btnState.cafeRolistesIsDisabled} clicked ={filterCafeRolistes}>Cafe Rolistes</Button>
                        <Button btnType={btnType} disabled={btnState.filmStudiesIsDisabled} clicked ={filterFilmStudies}>Film Studies</Button>
                    </div>                    
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
                </div>
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