import React from 'react';
import { ClassesModel } from '../../../models/ ClassesModel';
import classes from './Button.module.scss';

type propsType = {
  type: string;
  children: string;
  //todo: fix onclick type after implement
  onClick: any;
  disabled?: boolean;
};

const Button: React.FC<propsType> = (props: propsType) => {
  const incomingClasses: ClassesModel = { ...classes };
  const cls: string[] = [classes.button, incomingClasses[props.type]];

  return (
    <button onClick={props.onClick} className={cls.join(' ')} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
