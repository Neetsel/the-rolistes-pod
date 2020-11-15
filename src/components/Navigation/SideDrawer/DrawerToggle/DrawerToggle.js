import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './DrawerToggle.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <FontAwesomeIcon icon={faBars} aria-hidden="true"/>    
    </div>
);

export default drawerToggle;