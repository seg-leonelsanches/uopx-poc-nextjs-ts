import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export const OpportunityTitle: React.FunctionComponent = () => (
  <>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h2" component="h3">
        Start your online college application
      </Typography>
    </Grid>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h4" component="h5">
        Explore ways to save with our Savings Explorer™ tool — get the credit you deserve.
      </Typography>
    </Grid>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h3" component="h4">
        Let's get started.
      </Typography>
    </Grid>
    <Grid item xs={12} paddingBottom={5}>
      <Typography variant="h4" component="h5">
        Choose ALL the opportunities that apply to you and see how our students have saved. Must select at least one.
      </Typography>
    </Grid>
  </>
)