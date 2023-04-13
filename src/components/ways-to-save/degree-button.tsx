import * as React from 'react';

import { Box, FormControlLabel, FormGroup, Grid, Paper, Radio, Typography } from '@mui/material';

export interface DegreeButtonProps {
  label: string;
}

export const DegreeButton: React.FunctionComponent<DegreeButtonProps> = (props) => (
  <Grid item xs={12}>
    <Box>
      <Paper>
        <FormGroup>
          <FormControlLabel control={<Radio />} label={props.label} value={props.label} />
        </FormGroup>
      </Paper>
    </Box>
  </Grid>
)