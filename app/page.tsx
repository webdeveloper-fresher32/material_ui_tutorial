"use client";
import MuiButtons from "@/app/components/inputs_form_controls/MuiButtons";
import MuiCheckBox from "@/app/components/inputs_form_controls/MuiCheckBox";
import MuiRadioButtons from "@/app/components/inputs_form_controls/MuiRadioButtons";
import MuiSelect from "@/app/components/inputs_form_controls/MuiSelect";
import MuiTextFields from "@/app/components/inputs_form_controls/MuiTextFields";
import MuiTypography from "@/app/components/inputs_form_controls/MuiTypography";
import MuiSwitch from "./components/inputs_form_controls/MuiSwitch";
import MuiRating from "./components/inputs_form_controls/MuiRating";
import MuiAutoComplete from "./components/inputs_form_controls/MuiAutoComplete";
import MUILayOut from "./components/layouts/MUILayOut";
import MuiCard from "./components/layouts/MuiCard";
import MuiAccordian from "./components/layouts/MuiAccordian";
import MuiResponsivness from "./components/MuiResponsivness";
import {
  createTheme,
  ThemeOptions,
  colors,
  ThemeProvider,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "red",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MuiTypography /> */}
      {/* <MuiButtons /> */}
      {/* <MuiTextFields /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButtons /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoComplete /> */}
      {/* <MUILayOut /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordian /> */}
      <MuiResponsivness />
    </ThemeProvider>
  );
}
