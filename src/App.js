import React, { Suspense } from 'react';
import Layout from './hoc/Layout/Layout';

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

function App() {

  let routes = (
    <Switch>
      <Route path="/news" exact render={(props) =>  <News {...props}/>}/>
      <Route path="/news/:pageId" render={(props) =>  <Post {...props} type="FULLNEWS"/>}/>    
      <Route path="/podcast" exact render={(props) =>  <Podcast {...props}/>}/>
      <Route path="/podcast/:pageId" render={(props) =>  <Post {...props} type="FULLPODCAST"/>}/>     
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

export default withRouter(App);
