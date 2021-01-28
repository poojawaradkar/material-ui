const URL_REGEX = /^(ftp|https|http|data?):/;

export const isUrlAbsolute = url => URL_REGEX.test(url);
