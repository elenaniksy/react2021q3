import React, { useEffect, useState } from 'react';
import classes from './ArticlesHolder.module.scss';
import { IArticle } from '../../interfaces/IArticle';
import Article from '../article/Article';

interface IArticlesHolderProps {
  articles: IArticle[];
  page: number;
  onChangePage: (pageFromInput: number) => void;
}

const ArticlesHolder: React.FC<IArticlesHolderProps> = (props: IArticlesHolderProps) => {
  const incomingArticles: IArticle[] = [...props.articles];
  const [artPage, setArtPage] = useState<number | string>(1);

  useEffect(() => {
    setArtPage(props.page);
  }, [props.page]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = target.value;
    const regex = /\d+/;
    const matchedValue = value.match(regex);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      props.onChangePage(newValue);
      setArtPage(newValue);
    } else {
      setArtPage('');
    }
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    const id: string = target.id;

    if (id === 'prev' && artPage > 1) {
      const preValue: number = +artPage - 1;
      props.onChangePage(preValue);
      setArtPage(preValue);
    }

    if (id === 'next') {
      const nextValue = +artPage + 1;
      props.onChangePage(nextValue);
      setArtPage(nextValue);
    }
  };

  return (
    <div className={classes.article}>
      <div className={classes.pagination}>
        <button id='prev' onClick={handlePageChange}>
          &lt;&lt;
        </button>
        <label htmlFor='page-number'>
          <input id='page-number' type={'text'} value={artPage} onChange={handleChange} />
        </label>
        <button id='next' onClick={handlePageChange}>
          &gt;&gt;
        </button>
      </div>

      {incomingArticles.map((article: IArticle, index: number): JSX.Element => {
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
      })}
    </div>
  );
};

export default ArticlesHolder;
