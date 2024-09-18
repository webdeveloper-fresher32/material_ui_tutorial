import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  return (
    <Stack spacing={4}>
      <Button
        id="resources-button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(e.currentTarget);
        }}
        aria-controls={open ? "resources-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {" "}
        Resources
      </Button>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "resources-button",
        }}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Blog
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Podcast
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default MuiMenu;
