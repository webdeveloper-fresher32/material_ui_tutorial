import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <AvatarGroup max={3}>
        <Stack direction="row" spacing={1}>
          <Avatar variant="square" sx={{ bgcolor: "primary.light" }}>
            BW
          </Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>
            CX
          </Avatar>
          <Avatar>Caxy</Avatar>
        </Stack>
      </AvatarGroup>
    </Stack>
  );
};

export default MuiAvatar;
