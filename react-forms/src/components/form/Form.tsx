import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';
import Input from '../UI/input/Input';
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
        {/*<h2>Enter your data...</h2>*/}
        <form onSubmit={this.submitHandler}>
          <Input label={'Name'} errorMessage={'Test'} />
          <Input label={'Birthday'} />
          <Button onClick={() => this.registerHandler} type={'female'}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
