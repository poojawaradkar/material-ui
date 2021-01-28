import React from 'react';
import Button from '@material-ui/core/Button';

export default props => (
  <Button
    {...props}
    className={props.className}
  >
    {props.children}
  </Button>
);
