import React from 'react';
import classes from './Button.module.scss';

type propsType = {
  type: string;
  children: string;
  //todo: fix onclick type
  onClick: any;
  disabled?: boolean;
};

const Button: React.FC<propsType> = (props: propsType) => {
  // @ts-ignore //todo: fix classes[props.type] type
  const cls: string[] = [classes.button, classes[props.type]];

  return (
    <button onClick={props.onClick} className={cls.join(' ')} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
