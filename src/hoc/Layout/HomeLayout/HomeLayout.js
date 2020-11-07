import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import ComingSoon from '../../../components/ComingSoon/ComingSoon';
import classes from './HomeLayout.module.css';
import Footer from '../../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';

const HomeLayout = (props) => (
    <Aux>
        <Container>
            <ComingSoon/>            
            <Posts {...props} type="LATESTNEWS" />
            <Posts {...props} type="LATESTPODCAST" />        
        </Container>
        
        <Footer/>        
    </Aux>
)

export default HomeLayout;