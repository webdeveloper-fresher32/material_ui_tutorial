import { Check, Close } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an info message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
      <Alert severity="error">This is an error message!</Alert>

      <Alert variant="outlined" severity="warning">
        This is a warning message!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info message!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success message!
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an error message!
      </Alert>

      <Alert variant="filled" severity="warning">
        This is a warning message!
      </Alert>
      <Alert variant="filled" severity="info" onClose={() => alert("closed")}>
        <AlertTitle>Info</AlertTitle>
        This is an info message!
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            <Close />
          </Button>
        }
      >
        This is a success message!
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
