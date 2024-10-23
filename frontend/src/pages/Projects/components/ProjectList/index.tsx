import { Grid2 as Grid } from "@mui/material";
import Project from "../Project";

export default function ProjectList() {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Project />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Project />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Project />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Project />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Project />
      </Grid>
    </>
  );
}
