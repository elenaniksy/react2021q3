import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { FormControlsModel } from '../../models/FormControlsModel';
import { FormControlItemModel } from '../../models/FormControlItemModel';

type FormStateModel = {
  isFormValid: boolean;
  formControls: FormControlsModel;
};

class Form extends React.Component {
  state: FormStateModel = {
    isFormValid: false,
    formControls: {
      name: {
        value: '',
        type: 'text',
        label: 'name',
        errorMessage: 'This field should be more then 3 symbols',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3,
        },
      },
      birthday: {
        value: '',
        type: 'date',
        label: 'birthday',
        errorMessage: 'Enter your correct Birthday',
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
    },
  };

  //todo: declare interface of validation
  validateControl(value: string, validation: any): boolean {
    if (!validation) {
      return true;
    }

    let isValid: boolean = true;

    if (validation.required) {
      isValid = value.trim() !== '';
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event: React.FormEvent<HTMLInputElement>, controlName: string): void => {
    const formControls: FormControlsModel = { ...this.state.formControls };
    // @ts-ignore //todo: check control type
    const control: FormControlItemModel = { ...formControls[controlName] };

    // @ts-ignore //todo: check why value does not exist in EventTarget
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    let isFormValid: boolean = true;
    Object.keys(formControls).forEach((name: string): void => {
      // @ts-ignore //todo: check formControls[name].value type
      isFormValid = formControls[name].valid && isFormValid;
    });

    // @ts-ignore //todo: check control type
    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid,
    });
  };

  renderInputs = () => {
    const inputs: JSX.Element[] = Object.keys(this.state.formControls).map((controlName: string, index: number) => {
      // @ts-ignore //todo: check control type
      const control: FormControlItemModel = this.state.formControls[controlName];

      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChangeHandler(event, controlName)}
        />
      );
    });

    return inputs;
  };

  registerHandler = () => {
    console.log('registerHandler');
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  render(): RenderType {
    return (
      <div className={classes.form}>
        <form onSubmit={this.submitHandler}>
          {this.renderInputs()}
          <Button onClick={() => this.registerHandler} type={'primary'} disabled={!this.state.isFormValid}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
