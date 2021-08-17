import React, { useState } from 'react';
import classes from './Form.module.scss';
import axiosInst from '../../services/api';
import { AxiosResponse } from 'axios';
import { IArticle } from '../../interfaces/IArticle';
import { IData_GET200 } from '../../interfaces/IData_GET200';
import ArticlesHolder from '../article/ArticlesHolder';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

const Form: React.FC = (): JSX.Element => {
  const htmlFor = `search--${Math.random()}`;
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arts, setArt] = useState<IArticle[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = target.value;
    setSearchValue(value);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response: AxiosResponse<IData_GET200> = await axiosInst.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}`);
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
        <label htmlFor={htmlFor}>
          <input id={htmlFor} type='text' value={searchValue} onChange={handleChange} disabled={isLoading} />
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      <ArticlesHolder articles={arts} />
    </div>
  );
};

export default Form;
