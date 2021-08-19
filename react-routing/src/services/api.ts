import axios from 'axios';

const axiosInst = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export default axiosInst;
