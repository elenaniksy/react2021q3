import React from 'react';
import classes from './Input.module.scss';

type PropsType = {
  type: string;
  label: string;
  value: string;
  //todo: fix onClick type
  onChange: any;
  errorMessage: string;
};

type isInvalidPropsType = {
  //todo: check valid type
  valid: boolean;
  touched: boolean;
  shouldValidate: boolean;
};

function isInvalid(isInvalidProps: isInvalidPropsType): boolean {
  return !isInvalidProps.valid && isInvalidProps.shouldValidate && isInvalidProps.touched;
}

const Input: React.FC<PropsType> = (props: PropsType) => {
  const inputType: string = props.type || 'text';
  const cls: string[] = [classes.input];
  const htmlFor: string = `${inputType}-${Math.random()}`;

  if (isInvalid(isInvalidProps)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} />

      {isInvalid(isInvalidProps) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
