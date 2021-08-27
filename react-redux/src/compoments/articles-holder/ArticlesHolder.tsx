import React from 'react';
import classes from './ArticlesHolder.module.scss';
import { useSelector } from 'react-redux';
import { IAppReduxState } from '../../interfaces/IAppReduxState';
import { IArticle } from '../../interfaces/IArticle';
import Article from '../article/Article';

interface IArticlesHolderProps {
  page: number;
  onChangePage: (pageFromInput: number) => void;
}

const ArticlesHolder: React.FC<IArticlesHolderProps> = (props: IArticlesHolderProps) => {
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
