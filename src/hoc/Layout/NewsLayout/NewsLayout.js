import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Article from '../../../components/Article/Article';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';


const NewsLayout = (props) => (
    <Aux>
        <Article/>
        <PaginationList/>
         
    </Aux>
)

export default NewsLayout;