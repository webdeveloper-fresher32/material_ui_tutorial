import { CopyAll, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation-speed-dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="Copy" tooltipOpen />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
