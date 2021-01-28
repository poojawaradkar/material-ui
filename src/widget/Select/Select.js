import React from 'react';
import Select from '@material-ui/core/Select';

export default props => (
  <Select
    {...props}
  >
    {props.children}
  </Select>
);
