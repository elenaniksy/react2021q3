import React from 'react';
import classes from './Article.module.scss';

interface IArticleProps {
  title: string;
  author: string;
  image: string;
  publishedDate: string;
  content: string;
  url: string;
}

const Article: React.FC<IArticleProps> = (props: IArticleProps) => {
  return (
    <div className={classes.article}>
      <a href={props.url}>
        <div className={classes.article__text}>
          <h2>{props.title}</h2>
          <p>{props.author}</p>
          <p>{props.publishedDate}</p>
          <p>{props.content}</p>
        </div>
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );
};

export default Article;
