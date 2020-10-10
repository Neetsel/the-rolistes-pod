import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={""} alt="Logo"/>
    </div>
);

export default logo;