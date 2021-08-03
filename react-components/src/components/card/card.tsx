import React, { ReactChild } from 'react';
import './cards.scss';
import { CardItemModel } from '../Models/CardItemModel';

const Card: React.FC = (props: CardItemModel) => {
  return (
    <div className={'card'}>
      <h2 className={'card__header'}>{props.name}</h2>
    </div>
  );
};

export default Card;
