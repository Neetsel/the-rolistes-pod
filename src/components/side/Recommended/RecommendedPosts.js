import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import RecommendedPost from './RecommendedPost/RecommendedPost';
import { Row } from 'react-bootstrap';

const RecommendedPosts = (props) => {
    
    const recommendedPosts = <Spinner/>
    const relatedPosts = [];

    // recommendedPosts = relatedPosts.map (post => (
    //     <RecommendedPost 
    //         cover={post.cover}
    //         title={post["title"]}/>
    // ));
    
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recommended</h2>
                <Row>
                    {recommendedPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecommendedPosts;