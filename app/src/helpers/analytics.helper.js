import axios from 'axios';
import { API_URL } from '../config';

export const getAnalyticsInfo = async () => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `analytics/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

export const getTotalVistsForURLInfo = async (urlcode, ucode = 'no') => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `analytics/${userId}/${urlcode}?ucode=${ucode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};
