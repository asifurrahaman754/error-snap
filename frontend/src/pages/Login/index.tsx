import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material";
import AuthFormWrapper from "components/AuthFormWrapper";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthFormWrapper>
      <Grid size={12}>
        <Typography color="white" textAlign="center">
          Login
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
        <Button fullWidth variant="contained" onClick={() => {}}>
          Submit
        </Button>
      </Grid>
      <Grid size={12}>
        <Button
          variant="text"
          onClick={() => {
            navigate("/register");
          }}
        >
          register
        </Button>
      </Grid>
    </AuthFormWrapper>
  );
}
