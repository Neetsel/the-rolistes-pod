import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Article from '../../../components/Post/Post';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';


const NewsLayout = (props) => (
    <Aux>
        <Article/>
        <PaginationList/>
         
    </Aux>
)

export default NewsLayout;