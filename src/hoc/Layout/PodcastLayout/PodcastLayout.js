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
    const [disabledButtons, setdisabledButtons] = useState([]);
    // setdisabledButtons({

    // })
    // const [formIsValid, setFormIsValid] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false); 
    
    
    // need to convert this with use effect

    useEffect(() => {
        props.onSetCurrentPagePodcast(1);
        props.onSetCurrentCategoryPodcast("podcast");
      }, [])

    const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);
    
    const filterAll = () => {        
        props.onSetCurrentCategoryPodcast("podcast");
    } 

    const filterRolistesPod = () => {    
        props.onSetCurrentCategoryPodcast("the-rolistes-podcast");   
    }
    const filterRolistesPresent = () => props.onSetCurrentCategoryPodcast("the-rolistes-present");
    const filterCafeRolistes = () => props.onSetCurrentCategoryPodcast("cafe-rolistes");
    const filterFilmStudies = () => props.onSetCurrentCategoryPodcast("film-studies");
 
    return (
        <Aux>
            <Container>
                <div className={globalClasses.item_box}>
                    <h1 className={globalClasses.section_title}>Podcast</h1>
                    <div className={classes.filters}>
                        <Button btnType={btnType} disabled={false} clicked ={filterAll}>ALL</Button>
                        <Button btnType={btnType} disabled={false} clicked ={filterRolistesPod}>The Rolistes Podcast</Button>
                        <Button btnType={btnType} disabled={false} clicked ={filterRolistesPresent}>The Rolistes Present</Button>
                        <Button btnType={btnType} disabled={false} clicked ={filterCafeRolistes}>Cafe Rolistes</Button>
                        <Button btnType={btnType} disabled={false} clicked ={filterFilmStudies}>Film Studies</Button>
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