const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

const REACT_APP_GA_ID = process.env.REACT_APP_GA_ID;

export { API_URL, REACT_APP_GA_ID };
