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
