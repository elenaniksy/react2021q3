import React, { useState } from 'react';
import classes from './Form.module.scss';
import axiosInst from '../../services/api';
import { AxiosResponse } from 'axios';
import { IArticle } from '../../interfaces/IArticle';
import { IData_GET200 } from '../../interfaces/IData_GET200';
import ArticlesHolder from '../article/ArticlesHolder';
import { SortType } from '../../interfaces/SortType';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

const Form: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arts, setArt] = useState<IArticle[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = target.value;

    switch (target.id) {
      case 'search':
        setSearchValue(value);
        break;
      case 'dateFrom':
        setDateFrom(value);
        break;
      case 'dateTo':
        setDateTo(value);
    }
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response: AxiosResponse<IData_GET200> = await axiosInst.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&from=${dateFrom}&to=${dateTo}&sortBy=${sortBy}`,
      );
      setArt(response.data.articles);
    } catch (e) {
      throw new Error(`API request error: ${e}`);
    } finally {
      setIsLoading(false);
      setSearchValue('');
      setDateFrom('');
      setDateTo('');
    }
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <div className={classes.line}>
          <label htmlFor={'search'}>
            <input id={'search'} type='text' value={searchValue} onChange={handleChange} disabled={isLoading} />
          </label>
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>
        <div className={classes.line}>
          <label>
            <input
              type='radio'
              value={SortType.relevancy}
              checked={sortBy === SortType.relevancy}
              onChange={() => setSortBy(SortType.relevancy)}
            />
            relevancy
          </label>
          <label>
            <input
              type='radio'
              value={SortType.popularity}
              checked={sortBy === SortType.popularity}
              onChange={() => setSortBy(SortType.popularity)}
            />
            popularity
          </label>
          <label>
            <input
              type='radio'
              value={SortType.publishedAt}
              checked={sortBy === SortType.publishedAt}
              onChange={() => setSortBy(SortType.publishedAt)}
            />
            publishedAt
          </label>
        </div>
        <div className={classes.line}>
          <input id={'dateFrom'} type='date' value={dateFrom} onChange={handleChange} />
          <input id={'dateTo'} type='date' value={dateTo} onChange={handleChange} />
        </div>
      </form>
      <ArticlesHolder articles={arts} />
    </div>
  );
};

export default Form;
