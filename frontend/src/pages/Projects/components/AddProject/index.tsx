import { Grid2 as Grid, TextField } from "@mui/material";

export default function AddProject() {
  return (
    <Grid container rowSpacing={2}>
      <Grid size={12}>
        <TextField
          name="name"
          label="project name"
          placeholder="project name"
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <TextField
          name="name"
          label="project name"
          placeholder="project name"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
