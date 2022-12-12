import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const LOAD_ARTICLE = 'article/loadArticle';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const loadArticle = id => {
  const targetArticle = articles.find(article => article.id === id);
  return {
    type: LOAD_ARTICLE,
    targetArticle
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case LOAD_ARTICLE:
      return { ...state, entry: action.targetArticle };
    default:
      return state;
  }
};

export default articleReducer;
