import React from 'react';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { NavLink } from 'react-router-dom';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];

    }
    
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                
                <div className={classes.Logo}>
                    <NavLink to="/" exact>
                        <Logo/>
                    </NavLink>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>


        </Aux>
    )    
}


export default sideDrawer;

