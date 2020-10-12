import React, { Suspense } from 'react';
import Layout from './hoc/Layout/Layout';

import xmlData from './assets/therolistespodcast.post.xml'



import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';



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

 
  axios.get(xmlData, {
    "Content-Type": "application/xml; charset=utf-8"
    })
    .then((response) => {
      console.log('Your xml file as string', response.data);

      let xml2js = require('xml2js');
      let parser = new xml2js.Parser();
              parser.parseString(
                  response.data,
                  (err,result) => {
                      console.log(result);
                      const fetchedPosts = result["rss"]["channel"][0]["item"];
                      
                      console.log(fetchedPosts);
                      console.log(fetchedPosts.length);
                      // for (let )
                  }
              )

    })
    .catch(error => {
      console.log(error);
    });



  return (
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>        
      </Layout>
  );
}

export default withRouter(App);
