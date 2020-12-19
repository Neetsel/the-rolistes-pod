import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';

const RecommendedPosts = (props) => {
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recommended</h2>
                            
            </div>
            
        </Aux>
    )
}

export default RecommendedPosts;