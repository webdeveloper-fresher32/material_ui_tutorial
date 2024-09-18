"use client";
import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch />}
        checked={checked}
        onChange={() => {
          console.log(checked);
          setChecked(!checked);
        }}
      />
    </Box>
  );
}

export default MuiSwitch;
