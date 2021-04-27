import { API_URL } from '../config';

export const authHandler = (provider) => {
  window.open(`${API_URL}auth/${provider}`, '_self');
};
