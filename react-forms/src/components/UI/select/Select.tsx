import React from 'react';
import classes from './Select.module.scss';
import { ClassesModel } from '../../../models/ClassesModel';

type Option = {
  text: string;
  value: string;
};

type SelectProps = {
  label: string;
  value: string;
  onChange(event: React.FormEvent<HTMLSelectElement>): void;
  options: Option[];
};

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const htmlFor = `${props.label}-${Math.random()}`;
  const incomingClasses: ClassesModel = { ...classes };

  return (
    <div className={incomingClasses.select}>
      <label htmlFor={htmlFor}>{props.label}</label>

      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option: Option, index: number): JSX.Element => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
