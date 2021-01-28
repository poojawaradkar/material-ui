import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

export default props => (
  <InputLabel
    {...props}
  >
    {props.children}
  </InputLabel>
);
