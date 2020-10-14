import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';



const NewsLayout = (props) => (
    <Aux>
        <Posts/>
        <PaginationList/>
         
    </Aux>
)

export default NewsLayout;