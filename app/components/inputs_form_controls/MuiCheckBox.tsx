import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";

const MuiCheckBox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel label="Checkbox" control={<Checkbox />} />
      </Box>

      <Box>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox />}
            />
            <FormControlLabel label="CSS" value="css" control={<Checkbox />} />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={<Checkbox />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
