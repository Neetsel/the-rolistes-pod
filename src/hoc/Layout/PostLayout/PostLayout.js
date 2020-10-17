import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Post from '../../../components/Post/Post';
import classes from './PostLayout.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../../components/side/Follow/Follow';
import Contact from '../../../components/side/Contact/Contact';
import Support from '../../../components/side/Support/Support';
import RecommendedPosts from '../../../components/side/Recommended/RecommendedPosts';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';

const PostLayout = (props) => (
    <Aux>
        
        <Container>
            <Row>
                <Col lg={8} xs={12} >
                    <Post/>
                    <PaginationList/>
                </Col>
                <Col  lg={4} xs={12}>
                    <Follow />                    
                    <Contact />
                    <Support />
                    <RecommendedPosts/>
                    

                </Col>
            </Row>
        </Container>          
    </Aux>
)

export default PostLayout;