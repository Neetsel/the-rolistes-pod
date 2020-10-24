import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Post from '../../../components/Post/Post';
import classes from './PostLayout.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../../components/side/Follow/Follow';
import Contact from '../../../components/side/Contact/Contact';
import Support from '../../../components/side/Support/Support';
import RecommendedPosts from '../../../components/side/Recommended/RecommendedPosts';
import RecentPosts from '../../../components/side/Recent/RecentPosts';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import Footer from '../../../components/Footer/Footer';

const PostLayout = (props) => (
    <Aux>
        
        <Container>
            <Row>
                <Col lg={8} xs={12} >
                    <Post/>                    
                    <PaginationList/>
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
                        <Col xs={12}>
                            <RecommendedPosts/>
                        </Col>  
                        <Col xs={12}>
                            <RecentPosts/>
                        </Col>                  
                    </Row>                    
                </Col>
            </Row>
        </Container>    
        
        <Footer/>  
            
    </Aux>
)

export default PostLayout;