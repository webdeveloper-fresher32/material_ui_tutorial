import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefefe" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="secondary text" />
            <ListItemText primary="List item 2" />
            <ListItemText primary="List item 3" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
