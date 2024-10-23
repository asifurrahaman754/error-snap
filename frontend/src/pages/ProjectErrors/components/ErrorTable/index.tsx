import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { cssColor } from "utils/colors";
import ErrorFilters from "../ErrorFilters";

export default function ErrorTable() {
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: cssColor("paper"),
      }}
    >
      <ErrorFilters />

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#22252B",
          mt: 3,
        }}
      >
        <Table
          sx={{ minWidth: 650, "& td, & th": { border: 0 } }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Details</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>First seen</TableCell>
              <TableCell>Assigned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: cssColor("background"),
                },
              }}
            >
              <TableCell component="th" scope="row">
                jhjh
              </TableCell>
              <TableCell>hgh</TableCell>
              <TableCell>dfd</TableCell>
              <TableCell>dfd</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: cssColor("background"),
                },
              }}
            >
              <TableCell component="th" scope="row">
                jhjh
              </TableCell>
              <TableCell>hgh</TableCell>
              <TableCell>dfd</TableCell>
              <TableCell>dfd</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: cssColor("background"),
                },
              }}
            >
              <TableCell component="th" scope="row">
                jhjh
              </TableCell>
              <TableCell>hgh</TableCell>
              <TableCell>dfd</TableCell>
              <TableCell>dfd</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
