import { Box } from "@mui/material";
import React from "react";

export default function MuiResponsivness() {
  return (
    <Box
      sx={{
        border: "1px solid black",
        height: "300px",
        width: {
          xs: 100, // 0
          sm: 200, // 600
          md: 300, // 900
          lg: 400, // 1200
          xl: 500, // 1536
        },
        bgcolor: "secondary.main",
      }}
    ></Box>
  );
}
