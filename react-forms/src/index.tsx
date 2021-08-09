import React from 'react';
import ReactDOM from 'react-dom';
import classes from './testStyle.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <h1 className={classes.header}>React Forms!</h1>
  </React.StrictMode>,
  document.getElementById('root'),
);
