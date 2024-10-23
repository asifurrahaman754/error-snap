import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material";
import AuthFormWrapper from "components/AuthFormWrapper";

export default function Register() {
  return (
    <AuthFormWrapper>
      <Grid size={12}>
        <Typography color="white" textAlign="center">
          Register
        </Typography>
      </Grid>
      <Grid size={12}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          placeholder="enter you email"
        />
      </Grid>
      <Grid size={12}>
        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="enter you password"
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <TextField
          label="Confirm password"
          name="confirm_password"
          type="password"
          placeholder="enter you password again"
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <Button fullWidth variant="contained" onClick={() => {}}>
          Submit
        </Button>
      </Grid>
    </AuthFormWrapper>
  );
}
