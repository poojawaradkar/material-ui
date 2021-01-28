import React from 'react';
import { IconButton } from '@material-ui/core';

export default props => (
  <IconButton
    {...props}
  >
    {props.children}
  </IconButton>
);
