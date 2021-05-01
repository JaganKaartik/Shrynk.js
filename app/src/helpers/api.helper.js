import axios from 'axios';
import { API_URL } from '../config';

export const onboardingUser = async (accountType) => {
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
      },
      mode: 'cors',
      credentials: 'include',
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const getAllURLS = async (ucode = 'no') => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `dash/all/${userId}?ucode=${ucode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      credentials: 'include',
      mode: 'cors',
    })
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

export const addURL = async (longURL) => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
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
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
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
    .catch((err) => err.response.data);
};

export const getUserInfo = async () => {
  const authToken = localStorage.getItem('shrynk-jwt');
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(API_URL + `user/${userId}`, {
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
