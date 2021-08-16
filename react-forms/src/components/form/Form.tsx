import React from 'react';
import classes from './form.module.scss';
import { RenderType } from '../../models/RenderType';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import Select from '../UI/select/Select';
import Switcher from '../UI/switcher/Switcher';

import { FormControlsModel } from '../../models/FormControlsModel';
import { StateModel } from '../../models/StateModel';

interface IValidation {
  required: boolean;
  checked?: boolean;
  minLength?: number;
}

type FormProps = {
  onSubmit(event: React.FormEvent<HTMLFormElement>, state: StateModel): StateModel;
};

class Form extends React.Component<FormProps, StateModel> {
  constructor(props: FormProps) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  state: StateModel = {
    selectCountry: 'Russia',
    gender: 'female', //input checked: female === false, male === true
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
  validateControl(value: string, validation: IValidation): boolean {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '';
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.checked) {
      isValid = validation.checked;
    }

    return isValid;
  }

  onChangeHandler = async (event: React.FormEvent<HTMLInputElement>, controlName: string): Promise<void> => {
    const formControls: FormControlsModel = { ...this.state.formControls };
    const control: FormControlsModel = { ...formControls[controlName] };

    const target = event.target as HTMLInputElement;
    const value: string = target.value;
    const checked = target.checked;

    control.value = value;
    control.touched = true;
    control.validation.checked = checked;
    control.valid = this.validateControl(control.value, control.validation);

    let isFormValid = true;
    Object.keys(formControls).forEach((name: string): void => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    formControls[controlName] = control;
    await this.setState({
      formControls,
      isFormValid,
    });
  };

  renderInputs = (): JSX.Element[] => {
    const inputs: JSX.Element[] = Object.keys(this.state.formControls).map((controlName: string, index: number) => {
      const control = this.state.formControls[controlName];

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
          checked={control.checked}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChangeHandler(event, controlName)}
        />
      );
    });

    return inputs;
  };

  registerHandler = (): JSX.Element => {
    return <h1>done</h1>;
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.onSubmit(event, this.state);
    this.resetForm();
  };

  resetForm = (): void => {
    this.setState({
      selectCountry: 'Russia',
      gender: 'female',
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
    });
  };

  selectChangeHandler = (event: React.FormEvent<HTMLSelectElement>): void => {
    const target = event.target as HTMLSelectElement;
    const value: string = target.value;

    this.setState({
      selectCountry: value,
    });
  };

  toggleSwitchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    if (checked) {
      this.setState({
        gender: 'male',
      });
    } else {
      this.setState({
        gender: 'female',
      });
    }
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

    const switcher = <Switcher label={'Gender'} value={this.state.gender} type={'checkbox'} onChange={this.toggleSwitchHandler} />;
    return (
      <div className={classes.form}>
        <form onSubmit={this.submitHandler}>
          {this.renderInputs()}

          {switcher}
          {select}

          <Button onClick={this.registerHandler} type={this.state.gender} disabled={!this.state.isFormValid}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
