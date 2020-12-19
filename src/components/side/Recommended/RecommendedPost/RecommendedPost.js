import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecommendedPost = (props) => {

    return(
        <Aux>
            <Link>
                <img/>
                <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{props.title}</h3>    
            </Link>                  
        </Aux>
    )    
}

export default RecommendedPost;