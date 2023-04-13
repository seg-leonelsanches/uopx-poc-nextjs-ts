import * as React from 'react';

import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material';
import { ApplicationForm, DegreeForm, DegreeTitle, OpportunityButton, OpportunityTitle } from '@/components/ways-to-save';

export default function WaysToSave() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <OpportunityTitle />
      </Grid>
      <Grid container paddingBottom={5}>
        <OpportunityButton label="I have college experience" description="Associate degree or eligible transfer credits from an accredited university or college." />
        <OpportunityButton label="I have work experience" description="Relevant professional experience such as on-the-job training, licenses, and certificates." />
        <OpportunityButton label="I have life experience" description="Includes experience such as parenting, interviewing, stress management, and more." />
        <OpportunityButton label="I served in the US military" description="Apply eligible training you may have received while serving our country for college credit." />
        <OpportunityButton label="I want to take tests for college credit" description="Passing scores on these exams may be applied as credit toward your undergraduate degree." />
        <OpportunityButton label="I want self-paced alternative course providers" description="Team up with our learning providers to complete on-demand courses at your own pace." />
      </Grid>
      <Grid item xs={12} paddingBottom={5}>
        <DegreeTitle />
      </Grid>
      <Grid container paddingBottom={5}>
        <DegreeForm />
      </Grid>
      <Grid item xs={12} paddingBottom={5}>
        <Typography variant="h3" component="h4">
          Every dollar counts. Share your info so we can talk about saving options.
        </Typography>
      </Grid>
      <Grid item xs={12} paddingBottom={5}>
        <Typography variant="h4" component="h5">
          Answer a few questions and an enrollment representative will reach out soon.
        </Typography>
      </Grid>
      <Grid container paddingBottom={5}>
        <ApplicationForm />
      </Grid>
    </Grid>
  );
}