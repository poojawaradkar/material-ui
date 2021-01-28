/* eslint-disable no-bitwise */
const getCamelCase = text => text ? text[0].toUpperCase() + text.slice(1) : '';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'TABLET';
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'MOBILE';
  }
  return 'DESKTOP';
};

const hexToRGB = (h, opacity) => {
  let r = 0; let g = 0; let
    b = 0;

  // 3 digits
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;

  // 6 digits
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return `rgb(${+r},${+g},${+b}, ${opacity})`;
};

export {
  getCamelCase,
  getDeviceType,
  hexToRGB,
};
