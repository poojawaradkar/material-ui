import React from 'react';
import TextField from '@material-ui/core/TextField';

export default props => (
  <TextField
    {...props}
  >
    {props.children}
  </TextField>
);
