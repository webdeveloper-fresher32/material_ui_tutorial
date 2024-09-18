import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import React from "react";

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {" "}
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            iste non numquam illum architecto doloremque?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
