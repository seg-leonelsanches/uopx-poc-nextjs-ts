import * as React from 'react';

import { Grid, RadioGroup } from '@mui/material';
import { DegreeButton } from './degree-button';

export const DegreeForm: React.FunctionComponent = () => (
  <Grid item xs={12}>
    <RadioGroup
      row
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
    >
      <DegreeButton label="Bachelor's Degree" />
      <DegreeButton label="Associate Degree" />
    </RadioGroup>
  </Grid>
)