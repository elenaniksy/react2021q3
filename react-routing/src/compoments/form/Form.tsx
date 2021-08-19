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
  const [page, setPage] = useState<number>(1);
  const [sentRequest, setSentRequest] = useState<boolean>(false);

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

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void | JSX.Element> => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setSentRequest(true);
      const response: AxiosResponse<IData_GET200> = await axiosInst.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&from=${dateFrom}&to=${dateTo}&sortBy=${sortBy}&pageSize=10&page=${page}`,
      );
      setArt(response.data.articles);
    } catch (e) {
      throw new Error(`API request error: ${e}`);
    } finally {
      setIsLoading(false);
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
          <label className={classes.date} htmlFor='dateFrom'>
            From:
            <input id={'dateFrom'} type='date' value={dateFrom} onChange={handleChange} />
          </label>
          <label className={classes.date} htmlFor='dateTo'>
            To:
            <input id={'dateTo'} type='date' value={dateTo} onChange={handleChange} />
          </label>
        </div>

        <div className={classes.line}>
          {[SortType.relevancy, SortType.popularity, SortType.publishedAt].map((sortType: SortType, index: number) => {
            return (
              <label key={index}>
                <input type='radio' value={sortType} checked={sortBy === sortType} onChange={() => setSortBy(sortType)} />
                {sortType}
              </label>
            );
          })}
        </div>
      </form>
      {arts.length === 0 && sentRequest && !isLoading ? (
        <p>Error Request. Try again or research console error</p>
      ) : (
        <ArticlesHolder articles={arts} page={page} onChangePage={(pageFromInput: number) => setPage(pageFromInput)} />
      )}
    </div>
  );
};

export default Form;
