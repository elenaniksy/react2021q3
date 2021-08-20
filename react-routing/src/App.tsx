import React from 'react';
import classes from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './compoments/header/Header';
import Form from './compoments/form/Form';
import About from './compoments/about/About';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <h1>TASK IV: &lt;React Routing&gt;</h1>
      <Switch>
        <Route path='/' exact component={Form} />
        <Route path='/about' component={About} />
        {/*<Route path='/details/:id' component={ArticleDetails} />*/}
      </Switch>
    </div>
  );
};

export default App;
