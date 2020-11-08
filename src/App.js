import React, { Suspense, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';


const Home = React.lazy(()=>{
  return import ('./hoc/Layout/HomeLayout/HomeLayout');
});

const Post = React.lazy(()=>{
  return import ('./hoc/Layout/PostLayout/PostLayout');
});

const News = React.lazy(()=>{
  return import ('./hoc/Layout/NewsLayout/NewsLayout');
});

const Podcast = React.lazy(()=>{
  return import ('./hoc/Layout/PodcastLayout/PodcastLayout');
});

const AboutUs = React.lazy(()=>{
  return import ('./hoc/Layout/AboutUsLayout/AboutUsLayout');
});


const App = props => {

  const { onFetchPosts } = props;

    useEffect(()=> {
      onFetchPosts();      
    }, []);   

  let routes = (
    <Switch>
      <Route path="/news" exact render={(props) =>  <News {...props}/>}/>
      <Route path="/news/:pageId" render={(props) =>  <Post {...props} type="FULLNEWS"/>}/>    
      <Route path="/podcast" exact render={(props) =>  <Podcast {...props}/>}/>
      <Route path="/:year/:month/:day/:pageId" render={(props) =>  <Post {...props} type="FULLPODCAST"/>}/>     
      <Route path="/paris_gondo" render={(props) =>  <Post {...props}/>}/>
      <Route path="/about_us" render={(props) =>  <AboutUs {...props}/>}/>
      <Route path="/" render={(props) =>  <Home {...props}/>}/>            
    </Switch>
  );

  return (
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}          
        </Suspense>        
      </Layout>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPosts: () => dispatch (actions.fetchPosts())
  };
};

export default withRouter(connect(null,mapDispatchToProps)(App));
