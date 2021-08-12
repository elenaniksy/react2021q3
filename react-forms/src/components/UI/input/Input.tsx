import React from 'react';
import classes from './Input.module.scss';

type InputProps = {
  type: string;
  value: string;
  //todo: fix type onChange function
  onChange: any;
  label: string;
  errorMessage: string;
  valid: boolean;
  touched: boolean;
  shouldValidate: boolean;
};

function isInvalid({ valid, shouldValidate, touched }: InputProps): boolean {
  return !valid && shouldValidate && touched;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputType: string = props.type || 'text';
  const cls: string[] = [classes.input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} />

      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
