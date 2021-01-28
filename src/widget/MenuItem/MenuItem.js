import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default React.forwardRef((props, ref) => (
  <MenuItem
    ref={ref}
    {...props}
  >
    {props.children}
  </MenuItem>
));
