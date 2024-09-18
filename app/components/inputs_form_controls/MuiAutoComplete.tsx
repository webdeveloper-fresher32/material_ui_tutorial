"use client";
import { Stack, Autocomplete, TextField } from "@mui/material";
import React from "react";
const Skills = ["HTML", "CSS", "JS"];
function MuiAutoComplete() {
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={Skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
