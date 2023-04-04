import * as React from 'react';
import { Typography, TextField, Button, Grid, FormControl } from '@mui/material';

export const EmailLookup = () => (
    <>
        <Grid item>
            <Typography variant="h3" component="h4">
                You can complete our application in about 20 minutes. Let's get started.
            </Typography>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <Button variant="contained">Continue</Button>
        </Grid>
    </>
)