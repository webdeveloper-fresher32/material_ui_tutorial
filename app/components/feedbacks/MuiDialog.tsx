import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export default function MuiDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      ></Button>
      <Dialog
        aria-labelledby="dialog-title "
        aria-describedby="dialog-desc"
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <DialogTitle id="dialog-title">Submit the test ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desc">Are you sure ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
