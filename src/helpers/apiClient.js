import axios from 'axios';
import { isMobile } from 'react-device-detect';

export default function apiClient() {
  const instance = axios.create();

  let token;

  instance.setJwtToken = newToken => {
    token = newToken;
  };

  instance.interceptors.request.use(
    conf => {
      if (token) {
        conf.headers.authorization = token;
      }
      conf.headers['x-platform'] = isMobile ? 'mweb' : 'web';
      if (conf.url.indexOf(process.env.PARENT_APP_BOOKING_API_ENDPOINT) >= 0) {
        conf.headers['X-Secret-Token'] = process.env.PARENT_APP_BOOKING_API_SECRET_TOKEN;
      }
      return conf;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response : error)
  );

  return instance;
}
