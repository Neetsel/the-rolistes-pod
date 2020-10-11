
import React from 'react';
import classes from './PaginationList.module.css';
import Pagination from 'react-bootstrap/Pagination';


const PaginationList = () => {

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }
    

    const paginationBasic = (

        <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
        </div>
    );

    render(paginationBasic);
};

export default PaginationList;



