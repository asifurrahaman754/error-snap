import { Box, Container, Typography } from "@mui/material";
import Navbar from "components/Navbar";
import BugIcon from "Icons/BugIcon";
import { cssColor } from "utils/colors";
import ErrorTable from "./components/ErrorTable";

export default function ProjectErrors() {
  return (
    <>
      <Navbar />
      <Container>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          pt={3}
          pb={5}
          color={cssColor("textPrimary")}
        >
          <BugIcon fontSize="large" />
          <Box>
            <Typography variant="h1">Incidents</Typography>
            <Typography color={cssColor("textSecondary")}>
              List of incidents catched by ErrorSnap connected to your project
            </Typography>
          </Box>
        </Box>

        <ErrorTable />
      </Container>
    </>
  );
}
