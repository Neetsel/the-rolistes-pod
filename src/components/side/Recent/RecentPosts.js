import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../App.module.css';

const RecentPosts = (props) => {
    return (
        <Aux>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recent</h2>
                            
            </div>
        </Aux>
    )
}

export default RecentPosts;