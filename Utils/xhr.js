import axios from 'axios';
import {appConfig} from '../Config/app';

export const request = axios.create({
  baseURL: appConfig.apiUrl,
  timeout: 60000,
  // withCredentials: false,
  // crossDomain: true,
});
