import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode } from "react";
import theme from "..";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const newTheme = createTheme(theme);

  return <MuiThemeProvider theme={newTheme}>{children}</MuiThemeProvider>;
}
