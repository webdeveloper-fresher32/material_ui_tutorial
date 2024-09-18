import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpne] = useState(false);
  return (
    <>
      <IconButton>
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpne(false);
        }}
      >
        <Box width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
