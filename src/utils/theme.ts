import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = {
  palette: {
    type: "light",
    primary: {
      main: "#8592de",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#c97091",
    },
    text: {
      primary: "rgba(154,46,46,0.87)",
    },
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key];
};
declare module "@mui/material/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
export default createTheme(theme);
