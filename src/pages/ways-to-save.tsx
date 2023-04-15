import * as React from 'react';
import Link from 'next/link';

import crypto from 'crypto';

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material';
import { ApplicationForm, DegreeForm, DegreeTitle, OpportunityButton, OpportunityTitle } from '@/components/ways-to-save';
import { useAnalytics } from '@/hooks';
import { useMobxStores } from '@/data/stores';


export default function WaysToSave() {
  const analytics = useAnalytics();
  const { applicationFormStore, waysToSaveStore } = useMobxStores();

  const requestInformation = () => {
    const shasum: crypto.Hash = crypto.createHash('sha1');
    shasum.update(applicationFormStore.email);

    const id: string = shasum.digest('hex');
    let waysToSave = {};
    if (waysToSaveStore.degree !== null) {
      waysToSave = {
        ...waysToSave,
        degree: waysToSaveStore.degree
      }
    }

    if (waysToSaveStore.opportunities.length > 0) {
      waysToSave = {
        ...waysToSave,
        opportunities: waysToSaveStore.opportunities
      }
    }

    if (waysToSaveStore.militaryActiveDuty === true) {
      waysToSave = {
        ...waysToSave,
        militaryActiveDuty: waysToSaveStore.militaryActiveDuty
      }
    }

    analytics.identify(id, {
      email: applicationFormStore.email,
      firstName: applicationFormStore.firstName,
      lastName: applicationFormStore.lastName,
      phoneNumber: applicationFormStore.phoneNumber,
      postalCode: applicationFormStore.postalCode,
      militaryAffiliation: applicationFormStore.militaryAffiliation,
      waysToSave: waysToSave
    });

    alert('Form sent successfully');
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Link href="/">
          <Typography variant="h5" component="h6">
            To Application Form
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <OpportunityTitle />
      </Grid>
      <Grid container paddingBottom={5}>
        <OpportunityButton value='college' label="I have college experience" description="Associate degree or eligible transfer credits from an accredited university or college." />
        <OpportunityButton value='work' label="I have work experience" description="Relevant professional experience such as on-the-job training, licenses, and certificates." />
        <OpportunityButton value='life' label="I have life experience" description="Includes experience such as parenting, interviewing, stress management, and more." />
        <OpportunityButton value='military' label="I served in the US military" description="Apply eligible training you may have received while serving our country for college credit." />
        <OpportunityButton value='tests' label="I want to take tests for college credit" description="Passing scores on these exams may be applied as credit toward your undergraduate degree." />
        <OpportunityButton value='self-paced' label="I want self-paced alternative course providers" description="Team up with our learning providers to complete on-demand courses at your own pace." />
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
      <Grid item xs={12} paddingBottom={5}>
        <Button variant="contained" onClick={() => requestInformation()}>Request information</Button>
      </Grid>
    </Grid>
  );
}