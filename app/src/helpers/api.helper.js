import axios from './axiosConfig';

export const onboardingUser = async (accountType) => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request('dash/onboarding', {
      method: 'post',
      data: {
        userId,
        accountType,
      },
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const getAllURLS = async (ucode = 'no') => {
  const userId = localStorage.getItem('shrynk-usr-id');
  console.log(ucode);
  return await axios
    .get(`dash/all/${userId}?ucode=${ucode}`)
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

export const addURL = async (longURL) => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .request(`addurl`, {
      method: 'post',
      data: {
        userId,
        longURL,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const deleteURL = async (code) => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .delete(`dash/${code}`, {
      data: {
        userId,
      },
    })
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

export const getUserInfo = async () => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .get(`user/${userId}`)
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};
