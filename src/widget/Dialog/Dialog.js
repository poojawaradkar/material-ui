import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default props => (
  <Dialog
    {...props}
  >
    {props.children}
  </Dialog>
);
