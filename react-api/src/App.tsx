import React from 'react';
import classes from './App.module.scss';
import Form from './compoments/form/Form';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <h1>TASK III: &lt;React API&gt;</h1>
      {/*//todo: form with search && articles holder -> render article*/}
      <Form />
    </div>
  );
};

export default App;
