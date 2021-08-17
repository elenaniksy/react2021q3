import React from 'react';
import classes from './ArticlesHolder.module.scss';
import { IArticle } from '../../interfaces/IArticle';

interface IArticlesHolderProps {
  articles: IArticle[];
}

const ArticlesHolder: React.FC<IArticlesHolderProps> = (props: IArticlesHolderProps) => {
  return <div className={classes.article}></div>;
};

export default ArticlesHolder;
