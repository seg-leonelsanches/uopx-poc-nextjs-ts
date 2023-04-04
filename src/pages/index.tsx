import * as React from 'react';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LeftPanel, EmailLookup } from '@/components/application-start';
import { CreateUoPxAccount } from '@/components/application-start/create-uopx-account';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <LeftPanel />
      </Grid>
      <Grid item xs={8}>
        <EmailLookup />
        <CreateUoPxAccount />
      </Grid>
    </Grid>
  );
}