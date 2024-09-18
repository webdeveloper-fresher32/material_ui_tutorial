import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const MuiNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div">
          {" "}
          Pokemon App
        </Typography>
        <Stack spacing={4} direction="row">
          <Button>Features</Button>
          <Button>Pricing</Button>
          <Button>About</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavBar;
