import React, { ReactChild } from 'react';
import './cards.scss';
import { CardItemModel } from '../Models/CardItemModel';

// @ts-ignore
const Card: React.FC = (props: CardItemModel) => {
  return (
    <div className={'card'}>
      <img className={'card__img'} src={props.image} alt={props.name} />
      <h2 className={'card__header'}>{props.name}</h2>
      <p className={'card__paragraph'}>
        Author:&nbsp;
        <a className={'card__link'} href={props.behance}>
          {props.author}
        </a>
      </p>
      <p className={'card__paragraph'}>
        This project on&nbsp;
        <a className={'card__link'} href={props.project}>
          Behance
        </a>
      </p>
      <div className={'card__statistic'}>
        <p>Views: {props.views > 1000 ? `${props.views / 1000}K` : props.views}</p>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};

export default Card;
