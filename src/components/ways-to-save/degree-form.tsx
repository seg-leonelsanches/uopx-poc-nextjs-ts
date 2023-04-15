import * as React from 'react';

import { observer } from 'mobx-react';

import { Grid, RadioGroup } from '@mui/material';
import { DegreeButton } from './degree-button';
import { useMobxStores } from '@/data/stores';

const DegreeFormInternal: React.FunctionComponent = () => {
  const { waysToSaveStore } = useMobxStores();

  const setDegree = (degree: 'bachelor' | 'associate') => {
    waysToSaveStore.addDegree(degree);
  }

  return (
    <Grid item xs={12}>
      <RadioGroup
        row
        value={waysToSaveStore.degree}
        aria-labelledby="degree-group-label"
        name="degree-group"
      >
        <DegreeButton label="Bachelor's Degree" value='bachelor' onClick={setDegree} />
        <DegreeButton label="Associate Degree" value='associate' onClick={setDegree} />
      </RadioGroup>
    </Grid>
  )
}

export const DegreeForm = observer(DegreeFormInternal);