import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './ArticleDetails.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticle } from '../../store/actions/actions';
import { IAppReduxState } from '../../interfaces/IAppReduxState';
import * as H from 'history';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

interface MatchProps {
  title: string;
}

interface RouteComponentProps<MatchProps> {
  match: { match: match<MatchProps> };
  location?: H.Location;
  history?: H.History;
  staticContext?: any;
}

export interface match<MatchProps> {
  params: MatchProps;
  isExact: boolean;
  path: string;
  url: string;
}

const ArticleDetails: React.FC<RouteComponentProps<MatchProps>> = (props: RouteComponentProps<MatchProps>): JSX.Element => {
  const dispatch = useDispatch();
  const article = useSelector((state: IAppReduxState) => state.appState.selectedArticle);
  const history = useHistory();
  const { match } = props;
  const title = match.match.params.title;

  const urlResponse = `v2/everything?qInTitle=${title}&apiKey=${API_KEY}`;

  useEffect(() => {
    dispatch(loadArticle(urlResponse));
  }, [title]);

  return (
    <div className={classes.articleDetails}>
      <button type='button' onClick={() => history.push('/')}>
        Back to Articles
      </button>
      {article ? (
        <div className={classes.articleContent}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.publishedAt}</p>
          <p>{article.content}</p>
          <span>
            Read more: <a href={article.url}>here</a>
          </span>
          <img src={article.urlToImage} alt={article.title} />
        </div>
      ) : null}
    </div>
  );
};

export default ArticleDetails;
