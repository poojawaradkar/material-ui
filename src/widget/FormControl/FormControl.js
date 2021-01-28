import React from 'react';
import FormControl from '@material-ui/core/FormControl';

export default props => (
  <FormControl
    {...props}
  >
    {props.children}
  </FormControl>
);
