import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";

import { useMobxStores } from "@/data/stores";
import { observer } from "mobx-react";

const ApplicationFormInternal: React.FunctionComponent = () => {
  const { applicationFormStore } = useMobxStores();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            id="outlined-basic" 
            label="First Name" 
            variant="outlined" 
            required 
            value={applicationFormStore.firstName}
            onChange={(e) => applicationFormStore.addFirstName(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined" 
            required 
            value={applicationFormStore.lastName}
            onChange={(e) => applicationFormStore.addLastName(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            required 
            value={applicationFormStore.email}
            onChange={(e) => applicationFormStore.addEmail(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            id="outlined-basic" 
            label="Phone Number" 
            variant="outlined" 
            required 
            value={applicationFormStore.phoneNumber}
            onChange={(e) => applicationFormStore.addPhoneNumber(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            id="outlined-basic" 
            label="Postal Code" 
            variant="outlined" 
            required 
            value={applicationFormStore.postalCode}
            onChange={(e) => applicationFormStore.addPostalCode(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel id="military-affiliation-group-label">
            Do you have any U.S. Military affiliation?
          </FormLabel>
          <RadioGroup
            row
            value={applicationFormStore.militaryAffiliation}
            onChange={(e) => applicationFormStore.addMilitaryAffiliation(e.target.value)}
            aria-labelledby="military-affiliation-group-label"
            name="military-affiliation-group"
          >
            <FormControlLabel value='yes' control={<Radio />} label="Yes" />
            <FormControlLabel value='no' control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
}

export const ApplicationForm = observer(ApplicationFormInternal);