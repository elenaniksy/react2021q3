import React from 'react';
import classes from './App.module.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './compoments/header/Header';
import Form from './compoments/form/Form';
import About from './compoments/about/About';
import NotFound from './compoments/not-found/NotFound';
import ArticleDetails from './compoments/article-details/ArticleDetails';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className={classes.app}>
      <Header />
      <h1>TASK V: &lt;React Redux&gt;</h1>
      <TransitionGroup>
        <CSSTransition timeout={200} classNames={classes.page} key={location.key}>
          <Switch location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
