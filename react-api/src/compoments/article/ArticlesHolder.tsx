import React from 'react';
import classes from './ArticlesHolder.module.scss';
import { IArticle } from '../../interfaces/IArticle';
import Article from '../article-element/Article';

interface IArticlesHolderProps {
  articles: IArticle[];
}

const ArticlesHolder: React.FC<IArticlesHolderProps> = (props: IArticlesHolderProps) => {
  const incomingArticles: IArticle[] = [...props.articles];
  return (
    <div className={classes.article}>
      {incomingArticles.map((article: IArticle, index: number): JSX.Element => {
        return (
          <Article
            key={index}
            title={article.title}
            author={article.author}
            image={article.urlToImage}
            publishedDate={article.publishedAt}
            content={article.content}
          />
        );
      })}
    </div>
  );
};

export default ArticlesHolder;
