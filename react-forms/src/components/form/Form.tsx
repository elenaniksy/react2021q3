import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';

class Form extends React.Component {
  render(): RenderType {
    return (
      <div className={classes.form}>
        <h2>Enter your data...</h2>
        <form action='POST'>
          <input type='text' />
          <input type='text' />
        </form>
      </div>
    );
  }
}

export default Form;
