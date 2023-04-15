import * as React from 'react';

import { observer } from 'mobx-react';

import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material';
import { useMobxStores } from '@/data/stores';

export interface OpportunityButtonProps {
  label: string;
  description: string;
  value: string;
}

const OpportunityButtonInternal: React.FunctionComponent<OpportunityButtonProps> = (props) => {
  const { waysToSaveStore } = useMobxStores();

  const toggleOpportunity = () => {
    if (waysToSaveStore.opportunities.includes(props.value)) {
      waysToSaveStore.removeOpportunity(props.value);
    } else {
      waysToSaveStore.addOpportunity(props.value);
    }
  }

  return (
    <Grid item xs={12} sm={6}>
      <Box>
        <Paper>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox 
                checked={waysToSaveStore.opportunities.includes(props.value)}
                onChange={() => toggleOpportunity() } 
              />
            } label={props.label} />
          </FormGroup>
          <Typography variant="h6">{props.description}</Typography>
        </Paper>
      </Box>
    </Grid>
  )
}

export const OpportunityButton = observer(OpportunityButtonInternal);