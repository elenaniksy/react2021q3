import React from 'react';
import classes from './Article.module.scss';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';

type PathParamsType = {
  param1: string;
};

type IArticleProps = RouteComponentProps<PathParamsType> & {
  title: string;
  author: string;
  publishedDate: string;
  image: string;
  content: string;
  url: string;
  id: number;
};

const Article: React.FC<IArticleProps> = (props: IArticleProps) => {
  const history = useHistory();
  return (
    <div className={classes.article} onClick={() => history.push(`/details/${props.id}`)}>
      <div className={classes.article__text}>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.publishedDate}</p>
        <p>{props.content}</p>
      </div>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default withRouter(Article);
