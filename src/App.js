import React, { Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import axios from 'axios';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import data from './assets/therolistespodcast.post.xml'

const Home = React.lazy(()=>{
  return import ('./hoc/Layout/HomeLayout/HomeLayout');
});

const Article = React.lazy(()=>{
  return import ('./hoc/Layout/ArticleLayout/ArticleLayout');
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
      <Route path="/news" render={(props) =>  <News {...props}/>}/>
      <Route path="/podcast" render={(props) =>  <Podcast {...props}/>}/>
      <Route path="/paris_gondo" render={(props) =>  <Article {...props}/>}/>
      <Route path="/about_us" render={(props) =>  <AboutUs {...props}/>}/>
      <Route path="/" exact render={(props) =>  <Home {...props}/>}/>            
    </Switch>
  );

  if(data){
    console.log(data);
  }

  return (
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>        
      </Layout>
  );
}

export default withRouter(App);
