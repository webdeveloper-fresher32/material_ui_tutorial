import { Box, Stack } from "@mui/material";
import React from "react";

function MUILayOut() {
  return (
    <Stack sx={{ border: "1px solid black" }} direction="row">
      <Box
        sx={{
          color: "primary.main",
          backgroundColor: "secondary.main",
          width: "100px",
          height: "100px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      ></Box>
      <Box
        display="flex"
        width="100px"
        height="100px"
        color="green"
        p={2}
        bgcolor="green"
      >
        Ganesh
      </Box>
    </Stack>
  );
}

export default MUILayOut;
