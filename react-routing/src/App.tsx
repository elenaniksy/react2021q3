import React from 'react';
import classes from './App.module.scss';
import Form from './compoments/form/Form';
import Header from './compoments/header/Header';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <h1>TASK IV: &lt;React Routing&gt;</h1>
      <Form />
    </div>
  );
};

export default App;
