import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} color="success" />

      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} color="success" />
    </Stack>
  );
}
