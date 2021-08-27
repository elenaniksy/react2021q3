import {
  FAIL_ARTICLE_REQUEST,
  LOAD_ARTICLE_FAIL,
  LOAD_ARTICLE_RECEIVE,
  LOAD_ARTICLE_REQUEST,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES,
} from './actionTypes';
import axiosInst from '../../services/api';
import { AppDispatch } from '../../store';
import { IArticle } from '../../interfaces/IArticle';

export default function requestArticles(url: string): { type: string; url: string } {
  return {
    type: REQUEST_ARTICLES,
    url,
  };
}

export function receiveArticles(res: IArticle[]): { type: string; res: IArticle[] } {
  return {
    type: RECEIVE_ARTICLES,
    res,
  };
}

export function failRequestArticle(error: Error): { type: string; error: Error } {
  return {
    type: FAIL_ARTICLE_REQUEST,
    error,
  };
}

export function LoadArticleRequest(url: string): { type: string; url: string } {
  return {
    type: LOAD_ARTICLE_REQUEST,
    url,
  };
}

export function LoadArticleReceive(res: IArticle): { type: string; res: IArticle } {
  return {
    type: LOAD_ARTICLE_RECEIVE,
    res,
  };
}

export function LoadArticleFail(error: Error): { type: string; error: Error } {
  return {
    type: LOAD_ARTICLE_FAIL,
    error,
  };
}

export function getArticles(urlResponse: string) {
  return function (dispatch: AppDispatch) {
    dispatch(requestArticles(urlResponse));
    return axiosInst.get(urlResponse).then(
      res => dispatch(receiveArticles(res.data.articles)),
      error => dispatch(failRequestArticle(error)),
    );
  };
}

export function loadArticle(urlResponse: string) {
  return function (dispatch: AppDispatch) {
    dispatch(LoadArticleRequest(urlResponse));
    return axiosInst.get(urlResponse).then(
      res => dispatch(LoadArticleReceive(res.data.articles[0])),
      error => dispatch(LoadArticleFail(error)),
    );
  };
}
