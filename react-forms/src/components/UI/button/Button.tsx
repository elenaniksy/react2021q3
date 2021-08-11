import React from 'react';
import classes from './Button.module.scss';

type propsType = {
  type: string;
  children: string;
  onClick: any;
  disabled?: boolean;
};

const Button: React.FC<propsType> = (props: propsType) => {
  // @ts-ignore
  const cls: string[] = [classes.Button, classes[props.type]];

  return (
    <button onClick={props.onClick} className={cls.join(' ')} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
