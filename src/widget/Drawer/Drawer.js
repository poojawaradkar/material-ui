import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default props => (
  <SwipeableDrawer
    {...props}
  >
    {props.children}
  </SwipeableDrawer>
);
