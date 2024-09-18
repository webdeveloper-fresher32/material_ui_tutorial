import { Box, TextField, MenuItem } from "@mui/material";
import React from "react";

function MuiSelect() {
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        fullWidth
        // SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
