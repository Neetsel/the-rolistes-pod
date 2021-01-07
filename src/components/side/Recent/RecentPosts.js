import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import RecentPost from './RecentPost/RecentPost';
import { Row } from 'react-bootstrap';

const RecentPosts = (props) => {
    
    const recentPosts = <Spinner/>
    const relatedPosts = [];

    // recentPosts = relatedPosts.map (post => (
    //     <recentPost 
    //         cover={post.cover}
    //         title={post["title"]}/>
    // ));
    
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recent</h2>
                <Row>
                    {recentPosts}
                </Row>         
            </div>
        </Aux>
    )
}

export default RecentPosts;