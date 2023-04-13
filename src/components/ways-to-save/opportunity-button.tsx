import * as React from 'react';

import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material';

export interface OpportunityButtonProps {
  label: string;
  description: string
}

export const OpportunityButton: React.FunctionComponent<OpportunityButtonProps> = (props) => (
  <Grid item xs={6}>
    <Box>
      <Paper>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={props.label} />
        </FormGroup>
        <Typography variant="h6">{props.description}</Typography>
      </Paper>
    </Box>
  </Grid>
)