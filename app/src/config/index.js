// const API_URL_DEV = process.env.REACT_APP_API_URL_DEV;
// const API_URL = process.env.REACT_APP_API_URL_PROD;
// const CLIENT_DOMAIN_DEV = process.env.REACT_APP_CLIENT_DOMAIN_DEV;
// const CLIENT_DOMAIN_PROD = process.env.REACT_APP_CLIENT_DOMAIN_PROD;

// if (process.env.NODE_ENV === "production") {
//   const API_URL = process.env.REACT_APP_API_URL_PROD;
// }

const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

export { API_URL };
