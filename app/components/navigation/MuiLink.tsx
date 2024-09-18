import { Link, Stack } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={4} direction="row">
      <Link href="#">Click here</Link>
      <Link
        href="#s"
        color="secondary"
        underline="hover"
        // underline="none"
      >
        here
      </Link>
    </Stack>
  );
};

export default MuiLink;
