import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import Select from '../UI/select/Select';
import { FormControlsModel } from '../../models/FormControlsModel';
import { FormControlItemModel } from '../../models/FormControlItemModel';

type FormStateModel = {
  selectCountry: string;
  isFormValid: boolean;
  formControls: FormControlsModel;
};

class Form extends React.Component {
  state: FormStateModel = {
    selectCountry: 'Russia',
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
      agree: {
        value: '',
        type: 'checkbox',
        label: 'I confirm these information',
        errorMessage: 'Confirm this form',
        valid: false,
        touched: false,
        validation: {
          required: true,
          checked: false,
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

    if (validation.checked) {
      return (isValid = true);
    }

    return isValid;
  }

  onChangeHandler = (event: React.FormEvent<HTMLInputElement>, controlName: string): void => {
    const formControls: FormControlsModel = { ...this.state.formControls };
    // @ts-ignore //todo: check control type
    const control: FormControlItemModel = { ...formControls[controlName] };

    // @ts-ignore //todo: check why checked does not exist in EventTarget
    control.validation.checked = event.target.checked ? true : null;

    // @ts-ignore //todo: check why value does not exist in EventTarget
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    let isFormValid = true;
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
    //todo: implement here component which will render elements with values from formControls
    //console.log(this.state.formControls, 'registerHandler');
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  selectChangeHandler = (event: React.FormEvent) => {
    this.setState({
      // @ts-ignore //todo: check formControls[name].value type
      selectCountry: event.target.value,
    });
  };

  render(): RenderType {
    const select = (
      <Select
        label={'Country...'}
        value={this.state.selectCountry}
        onChange={this.selectChangeHandler}
        options={[
          { text: 'Russia', value: 'Russia' },
          { text: 'Belarus', value: 'Belarus' },
          { text: 'Ukraine', value: 'Ukraine' },
        ]}
      />
    );
    return (
      <div className={classes.form}>
        <form onSubmit={this.submitHandler}>
          {select}
          {this.renderInputs()}
          <Button onClick={this.registerHandler} type={'primary'} disabled={!this.state.isFormValid}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
