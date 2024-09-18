import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

function MuiTextFields() {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row">
        <TextField
          type="password"
          disabled
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
          required
          helperText="We'll never share your email"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row">
        <TextField
          label="input adorment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="output adorment"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextFields;
