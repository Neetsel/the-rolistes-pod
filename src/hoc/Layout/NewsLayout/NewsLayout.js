import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../../components/side/Follow/Follow';
import Contact from '../../../components/side/Contact/Contact';
import Support from '../../../components/side/Support/Support';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';



const NewsLayout = (props) => 
{
    const postPerPage = 15;
    const indexOfLastPost = props.currentPageNews * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const paginate = (pageNumber) => props.onSetCurrentPageNews(pageNumber);

    return (
        <Aux>
            <Container>
                <Row>
                    <Col lg={8} xs={12} >
                        <Posts 
                            {...props} 
                            type="NEWS" 
                            indexOfFirstPost={indexOfFirstPost} 
                            indexOfLastPost={indexOfLastPost}/>
                        <PaginationList 
                            totalRecords={props.news.length} 
                            pageLimit={postPerPage} 
                            paginate={paginate}
                            currentPage={props.currentPageNews}/>
                    </Col>
                    <Col  lg={4} xs={12}>
                        <Row>  
                            <Col xs={12}>
                                <Follow /> 
                            </Col>                  
                            <Col xs={12}>
                                <Contact />
                            </Col>  
                            <Col xs={12}>
                                <Support />
                            </Col>                                         
                        </Row>    
                    </Col>
                </Row>
            </Container>  
            <Footer/>           
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        news: state.posts.news,
        currentPageNews: state.posts.currentPageNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPageNews: (pageNumber) => dispatch (actions.setCurrentPageNews(pageNumber))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(NewsLayout);
