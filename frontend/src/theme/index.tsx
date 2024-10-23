export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const theme = {
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: "32px",
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: "24px",
      lineHeight: 1.3,
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.43,
      fontWeight: 300,
    },
    button: {
      fontSize: "14px",
      lineHeight: 1.75,
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "12px",
      lineHeight: 1.4,
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "#121212",
      paper: "#1F1F1F",
    },
    text: {
      primary: "#dbe5ea",
      secondary: "#B0BEC5",
    },
    divider: "#424242",
    error: {
      main: "#F44336",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#333333",
            "& fieldset": {
              borderColor: "#616161",
            },
            "&:hover fieldset": {
              borderColor: "#B0BEC5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1E88E5",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#B0BEC5",
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#424242",
          },
          "& .Mui-disabled .MuiInputBase-input": {
            color: "#757575",
          },
          "& .Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F44336",
          },
          "& .Mui-error .MuiInputLabel-root": {
            color: "#F44336",
          },
          "& .Mui-error .MuiInputBase-input": {
            color: "#F44336",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#333333",
            "& fieldset": {
              borderColor: "#616161",
            },
            "&:hover fieldset": {
              borderColor: "#B0BEC5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1E88E5",
            },
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#424242",
          },
          "& .Mui-disabled .MuiInputBase-input": {
            color: "#757575",
          },
          "& .Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F44336",
          },
          "& .Mui-error .MuiInputBase-input": {
            color: "#F44336",
          },
        },
        icon: {
          color: "#FFFFFF",
        },
      },
    },
  },
};

export interface CustomColorNames {
  primary: true;
  secondary: true;
  background: true;
  paper: true;
  textPrimary: true;
  textSecondary: true;
  divider: true;
  error: true;
  hover: true;
}

export default theme;
