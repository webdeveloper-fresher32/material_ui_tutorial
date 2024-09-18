"use client";
import { ReactNode, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <button
            onClick={toggleTheme}
            style={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
