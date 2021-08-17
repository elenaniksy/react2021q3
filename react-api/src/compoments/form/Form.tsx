import React, { useState } from 'react';
import classes from './Form.module.scss';
import axiosInst from '../../services/api';
import { AxiosResponse } from 'axios';
import { IGetData } from '../../interfaces/IGetData';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

const Form: React.FC = () => {
  const htmlFor = `search--${Math.random()}`;
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = target.value;
    setSearchValue(value);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response: AxiosResponse<IGetData> = await axiosInst.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}`);
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
    </div>
  );
};

export default Form;
