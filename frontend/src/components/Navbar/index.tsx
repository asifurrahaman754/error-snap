import {
  AppBar,
  Box,
  Container,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MenuIcon from "Icons/MenuIcon";
import { useState } from "react";
import { cssColor } from "utils/colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggleSidebarMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: "56px",
          background: "hsla(0,0%,100%,.8)",
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: "#000000cc",
          borderBottom: `1px solid ${cssColor("divider")}`,
        }}
      >
        <Container
          sx={{
            height: "100%",
          }}
        >
          <Box height="100%" display="flex" alignItems="center">
            <MenuIcon
              sx={{ cursor: "pointer" }}
              onClick={handleToggleSidebarMenu}
              color="white"
              mr={1}
            />
            <Typography
              color="white"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              ErrorSnap
            </Typography>
          </Box>
        </Container>
      </AppBar>

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={handleToggleSidebarMenu}
        onOpen={handleToggleSidebarMenu}
      >
        <Box width="200px">hi</Box>
      </SwipeableDrawer>
    </>
  );
}
