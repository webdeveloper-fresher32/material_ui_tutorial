import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiTooltip = () => {
  return (
    <div>
      <Tooltip
        title="Delete"
        placement="top"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MuiTooltip;
