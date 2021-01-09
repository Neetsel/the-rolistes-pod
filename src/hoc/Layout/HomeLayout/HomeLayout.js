import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import ComingSoon from '../../../components/ComingSoon/ComingSoon';
import classes from './HomeLayout.module.css';
import Footer from '../../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';
import bannerImg from '../../../assets/images/rollinKunzArt/Banner.jpg';

const HomeLayout = (props) => (
    <Aux>
        <Container>  
            <img src={bannerImg} alt="banner" className={classes.banner}/>                    
            <Posts {...props} type="LATEST" />                
        </Container>        
        <Footer/>        
    </Aux>
)

export default HomeLayout;