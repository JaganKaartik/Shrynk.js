import axios from 'axios';
import { API_URL } from '../config';

const authToken = localStorage.getItem('shrynk-jwt');

const instance = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

export default instance;
