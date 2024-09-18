import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React from "react";

const MuiChips = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="chip"
        color="primary"
        size="small"
        variant="outlined"
        icon={<Face />}
      />
      <Chip
        label="chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
    </Stack>
  );
};

export default MuiChips;
