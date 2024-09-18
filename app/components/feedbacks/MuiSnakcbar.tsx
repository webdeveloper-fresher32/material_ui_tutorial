import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6000} ref={ref} {...props} />;
  }
);
const MuiSnakcbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Submit
      </Button>
      {/* <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClick={(event: React.BaseSyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") return;
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={(event: React.BaseSyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") return;
          setOpen(false);
        }}
      >
        <SnackbarAlert
          onClose={(
            event: React.BaseSyntheticEvent | Event,
            reason?: string
          ) => {
            if (reason === "clickaway") return;
            setOpen(false);
          }}
          severity="success"
        >
          Form submitted
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnakcbar;
