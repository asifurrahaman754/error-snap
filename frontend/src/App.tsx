import { Box } from "@mui/material";
import RoutProvider from "./routes/Provider";
import { cssColor } from "utils/colors";

function App() {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{
        background: cssColor("background"),
      }}
    >
      <RoutProvider />
    </Box>
  );
}

export default App;
