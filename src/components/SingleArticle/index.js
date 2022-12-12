import { useEffect } from 'react';
import './SingleArticle.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticle } from '../../store/articleReducer';

const SingleArticle = () => {
  const location = useLocation();
  const arr = location.pathname.split('/');
  const id = arr[arr.length - 1];
  console.log('🚀 ~ file: index.js:8 ~ SingleArticle ~ id', id);
  console.log(location.pathname);
  const dispatch = useDispatch();
  const article = useSelector(state => state.articleState.entry);

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    dispatch(loadArticle(id));
  }, [location]);

  return (
    <div className='singleArticle'>
      {article && (
        <>
          <h1>{article.title}</h1>
          <img src={article.imageUrl} alt='home' />
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
