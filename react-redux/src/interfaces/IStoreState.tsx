import { IArticle } from './IArticle';

export interface IStoreState {
  articles: IArticle[] | [];
  isLoading: boolean;
  sendRequest: boolean;
  selectedArticle: IArticle | null;
}
