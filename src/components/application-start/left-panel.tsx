import * as React from 'react';

import Image from 'next/image';

import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

export const LeftPanel = () => (
    <>
        <Grid item>
            <Image
                src="/starting-point.svg"
                alt="Starting Point"
                width={80}
                height={80}
                priority
            />
        </Grid>
        <Grid item>
            <Typography variant="h2" component="h3">
                Start your online college application
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h3" component="h4">
                You can complete our application in about 20 minutes. Let's get started.
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" component="h5">
                To begin, you'll need a University account.
            </Typography>
        </Grid>
        <Grid item>
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="You'll be able to save your work as you go, and come back to finish when you're ready." />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="If you decide to enroll, these will be your login credentials to access your student portal." />
                </ListItem>
            </List>
        </Grid>
    </>
)