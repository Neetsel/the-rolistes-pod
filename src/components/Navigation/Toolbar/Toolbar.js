import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Search from '../Search/Search';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Container>
            <DrawerToggle clicked = {props.DrawerToggleClicked}/>

            <nav >
                <NavLink to="/" exact>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                </NavLink>

                <div className={classes.DesktopOnly}>
                    <NavigationItems/>
                </div>
            </nav>

            <div>
                <Search/>
            </div>

        </Container>
    </header>
);

export default toolbar;