import * as React from 'react';

import { Grid, Typography } from '@mui/material';

export const DegreeTitle: React.FunctionComponent = () => (
  <>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h3" component="h4">
        Which degree are you interested in?
      </Typography>
    </Grid>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h4" component="h5">
        Choose the degree level that aligns with your needs.
      </Typography>
    </Grid>
  </>
)