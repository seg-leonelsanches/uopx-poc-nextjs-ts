import * as React from 'react';

import crypto from 'crypto';

import { useAnalytics } from '@/hooks';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';

export interface CreateUoPxAccountProps {
    email: string;
}

export const CreateUoPxAccount: React.FunctionComponent<CreateUoPxAccountProps> = (props) => {
    const analytics = useAnalytics();

    const [firstName, setFirstName] = React.useState('');
    const [middleName, setMiddleName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [suffix, setSuffix] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [currentAddress, setCurrentAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [stateProvince, setStateProvince] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');

    const sendForm = () => {
        const shasum: crypto.Hash = crypto.createHash('sha1');
        shasum.update(props.email);
        const id: string = shasum.digest('hex');

        analytics.identify(id, {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            suffix: suffix,
            email: props.email,
            address: { 
                currentAddress: currentAddress,
                city: city,
                stateProvince: stateProvince,
                postalCode: postalCode,
                country: country
            },
            preferredLanguage: 'English'
        });
    }

    return (
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
                <TextField id="outlined-basic" label="First Name" variant="outlined" required onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Middle Name" variant="outlined" onChange={(e) => setMiddleName(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" required onChange={(e) => setLastName(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Suffix" variant="outlined" onChange={(e) => setSuffix(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <Typography variant="h5" component="h6">
                Mailing Address
            </Typography>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Country" variant="outlined" required onChange={(e) => setCountry(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Current Address" variant="outlined" required onChange={(e) => setCurrentAddress(e.target.value)}/>
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="City" variant="outlined" required onChange={(e) => setCity(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="State/Province" variant="outlined" required onChange={(e) => setStateProvince(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField id="outlined-basic" label="Postal Code" variant="outlined" required onChange={(e) => setPostalCode(e.target.value)} />
            </FormControl>
        </Grid>
        <Grid item>
            <Typography variant="h5" component="h6">
                Phone Number
            </Typography>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={() => sendForm()}>Create my account</Button>
        </Grid>
    </>
)
    }