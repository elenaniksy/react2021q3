import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';
import Button from '../UI/button/Button';

class Form extends React.Component {
  registerHandler = () => {
    console.log('registerHandler');
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  render(): RenderType {
    return (
      <div className={classes.form}>
        <h2>Enter your data...</h2>
        <form onSubmit={this.submitHandler}>
          <input type='text' />
          <input type='text' />
          <Button onClick={() => this.registerHandler} type={'female'}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
