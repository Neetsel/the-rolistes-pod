
import React from 'react';
import classes from './PaginationList.module.css';
import { Pagination } from 'react-bootstrap';


const PaginationList = (props) => {

    let active = 1;
    let items = [];

    let totalRecords = 0;
    let totalPages = 0;
    let pageLimit = 15;

    totalPages = Math.ceil(totalRecords/pageLimit);

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }
    

    const paginationBasic = (

        <div>

            {/* <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br /> */}

            <Pagination size="sm">{items}</Pagination>
        </div>
    );

    return(paginationBasic);
};

export default PaginationList;



