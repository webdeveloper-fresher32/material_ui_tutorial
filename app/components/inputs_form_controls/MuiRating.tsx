"use client";
import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Stack spacing={4} direction="row">
      <Rating
        value={value}
        onChange={(e, newNumber: number | null) => {
          console.log(newNumber);
          setValue(newNumber);
        }}
        precision={0.5}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
      />
    </Stack>
  );
}

export default MuiRating;
