import { useEffect } from 'react';
import './SingleArticle.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useState } from 'react';

const SingleArticle = () => {
  const location = useLocation();
  const arr = location.pathname.split('/');
  const id = arr[arr.length - 1];
  console.log('🚀 ~ file: index.js:8 ~ SingleArticle ~ id', id);
  console.log(location.pathname);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleState.entries);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  useEffect(() => {
    const targetArticle = articles.find(article => article.id === id);
    console.log(
      '🚀 ~ file: index.js:24 ~ useEffect ~ targetArticle',
      targetArticle
    );
    setArticle(targetArticle);

    console.log('🚀 ~ file: index.js:16 ~ SingleArticle ~ articles', articles);
  }, [location]);

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt='home' />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
