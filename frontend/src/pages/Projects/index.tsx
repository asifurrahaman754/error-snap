import { Card, Container, Grid2 as Grid, Typography } from "@mui/material";
import Navbar from "components/Navbar";
import AddIcon from "Icons/AddIcon";
import ProjectList from "./components/ProjectList";
import { useState } from "react";
import DialogConfirm from "components/DialogConfirm";
import AddProject from "./components/AddProject";
import { cssColor } from "utils/colors";

export default function Projects() {
  const [openAddProjectPopup, setOpenAddProjectPopup] = useState(false);

  const handleToggleProjectPopup = () => {
    setOpenAddProjectPopup((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ py: 2 }}>
        <Typography display="block" mb={2} color="white">
          All Projects
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              variant="outlined"
              sx={{
                border: "1px solid #333",
                color: "white",
                height: "100%",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                minHeight: "80px",
                backgroundColor: cssColor("paper"),
              }}
              onClick={handleToggleProjectPopup}
            >
              <AddIcon color={cssColor("secondary")} fontSize="large" />
            </Card>
          </Grid>
          <ProjectList />
        </Grid>
      </Container>
      <DialogConfirm
        title="Add new project"
        open={openAddProjectPopup}
        onClose={handleToggleProjectPopup}
      >
        <AddProject />
      </DialogConfirm>
    </>
  );
}
