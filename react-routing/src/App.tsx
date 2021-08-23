import React from 'react';
import classes from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './compoments/header/Header';
import Form from './compoments/form/Form';
import About from './compoments/about/About';
import NotFound from './compoments/not-found/NotFound';
import ArticleDetails from './compoments/article-details/ArticleDetails';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <h1>TASK IV: &lt;React Routing&gt;</h1>
      <Switch>
        <Route path='/' exact component={Form} />
        <Route path='/about' component={About} />
        <Route
          path='/details/:title'
          render={match => {
            return <ArticleDetails match={match} />;
          }}
        />
        <Route path='/details/' />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
