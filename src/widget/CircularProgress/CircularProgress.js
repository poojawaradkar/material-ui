import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default props => (
  <CircularProgress
    {...props}
  >
    {props.children}
  </CircularProgress>
);
