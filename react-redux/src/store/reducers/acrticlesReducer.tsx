import { IStoreState } from '../../interfaces/IStoreState';
import { FAIL_ARTICLE_REQUEST, GET_ARTICLES, RECEIVE_ARTICLES, REQUEST_ARTICLES } from '../actions/actionTypes';
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

type Action = ActionGetArticles | ActionRequestArticles | ActionReceiveArticles | FailArticleRequest;

const initialState: IStoreState = {
  articles: [],
  isLoading: false,
  sendRequest: false,
};

export default function articlesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
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

    default:
      return state;
  }
}
