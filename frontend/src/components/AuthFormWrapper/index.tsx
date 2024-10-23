import { Box, Grid2 as Grid } from "@mui/material";
import { ReactNode } from "react";
import { cssColor } from "utils/colors";

export default function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      width="100%"
      height="100vh"
      display="grid"
      sx={{
        placeItems: "center",
      }}
    >
      <Grid
        sx={{
          border: "1px solid #1f1f1f",
          borderRadius: 2,
          color: "white",
          backgroundColor: cssColor("paper"),
        }}
        container
        spacing={2}
        px={3}
        py={3}
        maxWidth="400px"
      >
        {children}
      </Grid>
    </Box>
  );
}
