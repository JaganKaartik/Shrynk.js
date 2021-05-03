import axios from './axiosConfig';

export const getAnalyticsInfo = async () => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .get(`analytics/${userId}`)
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

export const getTotalVistsForURLInfo = async (urlcode, ucode = 'no') => {
  const userId = localStorage.getItem('shrynk-usr-id');
  return await axios
    .get(`analytics/${userId}/${urlcode}?ucode=${ucode}`)
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};
