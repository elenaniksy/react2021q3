import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './ArticleDetails.module.scss';
import { AxiosResponse } from 'axios';
import axiosInst from '../../services/api';
import { IArticle } from '../../interfaces/IArticle';
import { IData_GET200 } from '../../interfaces/IData_GET200';

const API_KEY = 'ed028494cd0a467c9e2ac37f12bc2df4';

interface MatchProps {
  match: any;
}

const ArticleDetails: React.FC<MatchProps> = (props: MatchProps): JSX.Element => {
  const [data, setData] = useState<null | IArticle>(null);
  const history = useHistory();
  const { match } = props;
  const title = match.match.params.title;

  useEffect(() => {
    const getResponse = async (): Promise<void> => {
      try {
        const response: AxiosResponse<IData_GET200> = await axiosInst.get(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`);
        const incomingArticle: IArticle = response.data.articles[0];
        setData({ ...incomingArticle });
      } catch (e) {
        throw Error(e);
      }
    };
    getResponse();
  }, [title]);

  return (
    <div className={classes.articleDetails}>
      <button type='button' onClick={() => history.push('/')}>
        Go to Homepage
      </button>
      {data ? (
        <div className={classes.articleContent}>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
          <p>{data.publishedAt}</p>
          <p>{data.content}</p>
          <span>
            Read more: <a href={data.url}>here</a>
          </span>
          <img src={data.urlToImage} alt={data.title} />
        </div>
      ) : null}
    </div>
  );
};

export default ArticleDetails;
