import { IStoreState } from '../../interfaces/IStoreState';
import {
  FAIL_ARTICLE_REQUEST,
  GET_ARTICLES,
  LOAD_ARTICLE_FAIL,
  LOAD_ARTICLE_RECEIVE,
  LOAD_ARTICLE_REQUEST,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES,
} from '../actions/actionTypes';
import { IArticle } from '../../interfaces/IArticle';

interface ActionGetArticles {
  type: typeof GET_ARTICLES;
  res: IArticle[];
}

interface ActionRequestArticles {
  type: typeof REQUEST_ARTICLES;
  res?: IArticle[];
}

interface ActionReceiveArticles {
  type: typeof RECEIVE_ARTICLES;
  res: IArticle[];
}

interface FailArticleRequest {
  type: typeof FAIL_ARTICLE_REQUEST;
  res?: IArticle[];
}

interface LoadArticleRequest {
  type: typeof LOAD_ARTICLE_REQUEST;
  res?: IArticle;
}

interface LoadArticleReceive {
  type: typeof LOAD_ARTICLE_RECEIVE;
  res?: IArticle;
}

interface LoadArticleFail {
  type: typeof LOAD_ARTICLE_FAIL;
  res?: IArticle;
}

type Action =
  | ActionGetArticles
  | ActionRequestArticles
  | ActionReceiveArticles
  | FailArticleRequest
  | LoadArticleRequest
  | LoadArticleReceive
  | LoadArticleFail;

const initialState: IStoreState = {
  articles: [],
  isLoading: false,
  sendRequest: false,
  selectedArticle: null,
};

export default function articlesReducer(state = initialState, action: any): IStoreState {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isLoading: true,
        sendRequest: true,
      };

    case RECEIVE_ARTICLES:
      return {
        isLoading: false,
        articles: action.res,
      };

    case FAIL_ARTICLE_REQUEST:
      return {
        isLoading: false,
        articles: [],
      };

    case LOAD_ARTICLE_REQUEST:
      return state;

    case LOAD_ARTICLE_RECEIVE:
      return {
        ...state,
        selectedArticle: action.res,
      };

    case LOAD_ARTICLE_FAIL:
      return {
        ...state,
        selectedArticle: null,
      };

    default:
      return state;
  }
}
