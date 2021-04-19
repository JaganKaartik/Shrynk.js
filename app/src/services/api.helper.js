import axios from 'axios';
import { API_URL } from '../config';

export const onboardingUser = async (accountType, fixedQuota) => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + 'dash/onboarding', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        userId,
        accountType,
        fixedQuota,
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const getAllURLS = async () => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `dash/all/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      credentials: 'include',
      mode: 'cors',
    })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => err);
};

export const addURL = async (longURL) => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  console.log(longURL, userId);
  return await axios
    .request(API_URL + `addurl`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        userId,
        longURL,
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => {
      console.log(resp.data);
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteURL = async (code) => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `dash/${code}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        userId,
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};
