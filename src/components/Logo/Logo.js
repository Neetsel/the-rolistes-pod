import React from 'react';
import classes from './Logo.module.css';
import imgLogo from '../../assets/images/Logo_Nav_Small.jpg';
import txtLogo from '../../assets/images/Logo_Nav_Title.jpg';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={imgLogo} alt="Logo"/>
        <img src={txtLogo} alt="The Rolistes"/>
    </div>
);

export default logo;