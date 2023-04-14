import * as React from 'react';

import { Box, FormControlLabel, FormGroup, Grid, Paper, Radio, Typography } from '@mui/material';

export interface DegreeButtonProps {
  label: string;
  value: 'bachelor' | 'associate';
  onClick: (degree: 'bachelor' | 'associate') => void;
}

export const DegreeButton: React.FunctionComponent<DegreeButtonProps> = (props) => (
  <Grid item xs={12}>
    <Box>
      <Paper>
        <FormGroup>
          <FormControlLabel control={
            <Radio
              onClick={() => props.onClick(props.value)}
            />
          } label={props.label} value={props.value} />
        </FormGroup>
      </Paper>
    </Box>
  </Grid>
)