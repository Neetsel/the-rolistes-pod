import React from 'react';
import classes from './Logo.module.css';
import imgLogo from '../../assets/images/Logo_Nav.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={imgLogo} alt="Logo"/>
    </div>
);

export default logo;