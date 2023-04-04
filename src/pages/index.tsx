import * as React from 'react';

import Grid from '@mui/material/Grid';
import { LeftPanel, EmailLookup } from '@/components/application-start';
import { CreateUoPxAccount } from '@/components/application-start/create-uopx-account';

export default function Home() {
  const [lookupDone, setLookupDone] = React.useState(false);

  return (
    <Grid container>
      <Grid item xs={4}>
        <LeftPanel />
      </Grid>
      <Grid item xs={8}>
        <EmailLookup setLookupDone={setLookupDone}/>
        { lookupDone && <CreateUoPxAccount /> }
      </Grid>
    </Grid>
  );
}