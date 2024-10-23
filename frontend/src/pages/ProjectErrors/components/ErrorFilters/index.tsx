import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "Icons/SearchIcon";
import { cssColor } from "utils/colors";

export default function ErrorFilters() {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <TextField
        placeholder="Search errors by name..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={cssColor("textPrimary")} />
              </InputAdornment>
            ),
          },
        }}
        name="search"
        fullWidth
      />

      <Select value={0} label="Status" onChange={null}>
        <MenuItem value={0}>Unresolve</MenuItem>
        <MenuItem value={1}>Pending</MenuItem>
        <MenuItem value={2}>Resolved</MenuItem>
      </Select>
    </Box>
  );
}
