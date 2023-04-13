import { useAnalytics } from "@/hooks";
import { FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";

export const ApplicationForm: React.FunctionComponent = () => {
  const analytics = useAnalytics();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" required onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" required onChange={(e) => setLastName(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="Email" variant="outlined" required onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" required onChange={(e) => setPhoneNumber(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="Postal Code" variant="outlined" required onChange={(e) => setPostalCode(e.target.value)} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        
      </Grid>
    </>
  );
}