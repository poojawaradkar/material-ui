import { getCookie, setCookie, removeCookie } from './cookieUtils';

export const getToken = () => getCookie(process.env.PARENT_APP_USER_TOKEN);

export const setToken = token => {
  setCookie(process.env.PARENT_APP_USER_TOKEN, token, {
    path: '/',
    domain: process.env.PARENT_APP_DOMAIN,
    expires: 2 * 365,
  });
};

export const deleteToken = () => {
  removeCookie(process.env.PARENT_APP_USER_TOKEN, {
    path: '/',
    domain: process.env.PARENT_APP_DOMAIN,
  });
};
