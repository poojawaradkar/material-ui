import cookies from 'js-cookie';

export const getCookie = (name = '', options = {}) => cookies.get(name, options);

export const getCookieJSON = (name = '') => cookies.getJSON(name);

export const setCookie = (name = '', value, options = {}) => cookies.set(name, value, options);

export const removeCookie = (name = '', options = {}) => cookies.remove(name, options);
