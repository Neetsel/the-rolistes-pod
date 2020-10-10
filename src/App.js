import React, { Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import HomeLayout from './hoc/Layout/HomeLayout/HomeLayout';
import ArticleLayout from './hoc/Layout/ArticleLayout/ArticleLayout';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

const Home = React.lazy(()=>{
  return import ('./hoc/Layout/HomeLayout/HomeLayout');
});

const Article = React.lazy(()=>{
  return import ('./hoc/Layout/ArticleLayout/ArticleLayout');
});

function App() {
  let routes = (
    <Switch>
      <Route path="/news" render={(props) =>  <Article {...props}/>}/>
      <Route path="/podcast" render={(props) =>  <Article {...props}/>}/>
      <Route path="/paris_gondo" render={(props) =>  <Article {...props}/>}/>
      <Route path="/about_us" render={(props) =>  <Article {...props}/>}/>
      <Route path="/" exact render={(props) =>  <Home {...props}/>}/>            
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
