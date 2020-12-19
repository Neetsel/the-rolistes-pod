import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import globalClasses from '../../../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecentPost = (props) => {

    return(
        <Aux>
            <Link>
                <img/>
                <div>
                    <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                    <h3 className={[globalClasses.section_title, globalClasses.section_title_side].join(' ')}>{props.title}</h3>      
                </div>
            </Link>
            
        </Aux>
    )
}

export default RecentPost;