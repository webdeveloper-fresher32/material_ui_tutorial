import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={1} color="primary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={1} color="primary" showZero max={999}>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary" showZero>
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" showZero invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
