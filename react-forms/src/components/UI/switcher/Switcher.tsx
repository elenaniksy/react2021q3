import React from 'react';
import classes from './Switcher.module.scss';
import { ClassesModel } from '../../../models/ClassesModel';

type SwitcherProps = {
  type: string;
  value: string;
  label: string;
};

const Switcher: React.FC<SwitcherProps> = (props: SwitcherProps) => {
  const htmlFor = `${props.label}-${Math.random()}`;
  const incomingClasses: ClassesModel = { ...classes };
  const cls: string[] = [incomingClasses.switcher, incomingClasses[props.value]];

  return (
    <div className={cls.join(' ')}>
      <input type={props.type} id={htmlFor} />
      <label htmlFor={htmlFor}>
        <span>F</span>
      </label>
    </div>
  );
};

export default Switcher;
