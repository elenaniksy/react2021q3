import React from 'react';
import classes from './TextParagraph.module.scss';
import { ClassesModel } from '../../models/ClassesModel';

type TextParagraphProps = {
  value: string;
  birthday: string;
  gender: string;
  country: string;
};

const TextParagraph: React.FC<TextParagraphProps> = (props: TextParagraphProps) => {
  const incomingClasses: ClassesModel = { ...classes };
  return (
    <div className={incomingClasses.textParagraph}>
      <h2>Your information...</h2>
      <div>
        <span>Name:</span>
        {props.value}
      </div>
      <div>
        <span>Birthday:</span>
        {props.birthday}
      </div>
      <div>
        <span>Gender:</span>
        {props.gender}
      </div>
      <div>
        <span>Country:</span>
        {props.country}
      </div>
    </div>
  );
};

export default TextParagraph;
