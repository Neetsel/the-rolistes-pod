import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems= (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/news">News</NavigationItem>
        <NavigationItem link="/podcast">Podcast</NavigationItem> 
        <NavigationItem link="/paris_gondo">Paris Gondo</NavigationItem>
        <NavigationItem link="/about_us">About Us</NavigationItem>
    </ul>
);

export default navigationItems;
