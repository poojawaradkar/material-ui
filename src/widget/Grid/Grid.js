import React from 'react';
import Grid from '@material-ui/core/Grid';

export default props => (
  <Grid
    {...props}
    className={props.className}
  >
    {props.children}
  </Grid>
);
