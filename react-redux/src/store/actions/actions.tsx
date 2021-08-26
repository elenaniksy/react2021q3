import { FAIL_ARTICLE_REQUEST, RECEIVE_ARTICLES, REQUEST_ARTICLES } from './actionTypes';
import axiosInst from '../../services/api';
import { AppDispatch } from '../../store';

export default function requestArticles(url: string) {
  return {
    type: REQUEST_ARTICLES,
    url,
  };
}

export function receiveArticles(res: any) {
  return {
    type: RECEIVE_ARTICLES,
    res,
  };
}

export function failRequestArticle(error: any) {
  return {
    type: FAIL_ARTICLE_REQUEST,
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
