import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';

export const CreateUoPxAccount = () => (
    <>
        <Grid item>
            <Typography variant="h3" component="h4">
                Create your University of Phoenix account
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h5" component="h6">
                Legal Name
            </Typography>
        </Grid>
        <Grid item>
            Please provide your registered legal name. This will help us when we collect your admission documents.
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Suffix" variant="outlined" />
            </FormControl>
        </Grid>
        <Grid item>
            <Typography variant="h5" component="h6">
                Mailing Address
            </Typography>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Country" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Current Address" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="City" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="State/Province" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Postal Code" variant="outlined" required />
            </FormControl>
        </Grid>
        <Grid item>
            <Typography variant="h5" component="h6">
                Phone Number
            </Typography>
        </Grid>
        <Grid item>
            <Button variant="contained">Create my account</Button>
        </Grid>
    </>
)