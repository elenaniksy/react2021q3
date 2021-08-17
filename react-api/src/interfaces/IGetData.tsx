import { IArticle } from './IArticle';

export interface IGetData {
  articles?: IArticle[];
  status: string;
  totalResults?: number;
}
