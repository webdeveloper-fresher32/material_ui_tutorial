import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import React from "react";

function MuiButtons() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https:google.com">
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secoundary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
      </Stack>
      <Stack direction="row">
        <IconButton aria-label="send" color="success" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          exclusive
          color="secondary"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="Italic" aria-label="italic">
            {" "}
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            {" "}
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButtons;
