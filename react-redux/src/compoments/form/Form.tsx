import React, { useState } from 'react';
import classes from './Form.module.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { SortType } from '../../interfaces/SortType';
import { getArticles } from '../../store/actions/actions';
import ArticlesHolder from '../articles-holder/ArticlesHolder';
import { IAppReduxState } from '../../interfaces/IAppReduxState';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

const Form: React.FC = (): JSX.Element => {
  const isLoading = useSelector((state: IAppReduxState) => state.appState.isLoading);
  const sentRequest = useSelector((state: IAppReduxState) => state.appState.sendRequest);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');
  const [page, setPage] = useState<number>(1);

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
    const urlResponse = `v2/everything?q=${searchValue}&apiKey=${API_KEY}&from=${dateFrom}&to=${dateTo}&sortBy=${sortBy}&pageSize=10&page=${page}`;
    await dispatch(getArticles(urlResponse));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = target.value;
    const regex = /\d+/;
    const matchedValue = value.match(regex);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      setPage(newValue);
    } else {
      setPage(1);
    }
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    const id: string = target.id;

    if (id === 'prev' && page > 1) {
      const preValue: number = +page - 1;
      setPage(preValue);
    }

    if (id === 'next') {
      const nextValue = +page + 1;
      setPage(nextValue);
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

        <div className={classes.pagination}>
          <button id='prev' onClick={handlePageChange}>
            &lt;&lt;
          </button>
          <label htmlFor='page-number'>
            <input id='page-number' type={'text'} value={page} onChange={handleInputChange} />
          </label>
          <button id='next' onClick={handlePageChange}>
            &gt;&gt;
          </button>
        </div>
      </form>
      {sentRequest && !isLoading ? <p>Error Request. Try again or research console error</p> : <ArticlesHolder />}
    </div>
  );
};

export default connect()(Form);
