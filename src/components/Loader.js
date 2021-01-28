import React from 'react';

import {
  CircularProgress
} from 'widget';

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    }}
  >
    <CircularProgress />
  </div>
);

export default Loader;
