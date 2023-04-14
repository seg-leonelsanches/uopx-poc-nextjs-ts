import * as React from 'react';
import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { LeftPanel, EmailLookup } from '@/components/application-start';
import { CreateUoPxAccount } from '@/components/application-start/create-uopx-account';
import { Typography } from '@mui/material';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [lookupDone, setLookupDone] = React.useState(false);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Link href="/ways-to-save">
          <Typography variant="h5" component="h6">
            To Ways to Save Form
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <LeftPanel />
      </Grid>
      <Grid item xs={8}>
        <EmailLookup setLookupDone={setLookupDone} setEmail={setEmail} />
        {lookupDone && email !== '' && <CreateUoPxAccount email={email} />}
      </Grid>
    </Grid>
  );
}