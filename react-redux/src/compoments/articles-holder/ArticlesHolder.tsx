import React from 'react';
import classes from './ArticlesHolder.module.scss';
import { useSelector } from 'react-redux';
import { IAppReduxState } from '../../interfaces/IAppReduxState';
import { IArticle } from '../../interfaces/IArticle';
import Article from '../article/Article';

const ArticlesHolder: React.FC = () => {
  const articles = useSelector((state: IAppReduxState) => state.appState.articles);

  return (
    <div className={classes.article}>
      {articles
        ? articles.map((article: IArticle, index: number): JSX.Element => {
            return (
              <Article
                key={index}
                title={article.title}
                author={article.author}
                image={article.urlToImage}
                publishedDate={article.publishedAt}
                content={article.content}
                id={index + 1}
              />
            );
          })
        : null}
    </div>
  );
};

export default ArticlesHolder;
