import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Posts from '../../../containers/Posts/Posts';
import classes from './NewsLayout.module.css';
import PaginationList from '../../../components/UI/PaginationList/PaginationList';
import { connect } from 'react-redux';



const NewsLayout = (props) => (
    <Aux>
        <Posts {...props} />
        <PaginationList/>
         
    </Aux>
)



export default connect()(NewsLayout);