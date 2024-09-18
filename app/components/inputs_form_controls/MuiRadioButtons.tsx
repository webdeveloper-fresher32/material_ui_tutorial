import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function MuiRadioButtons() {
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
        >
          <FormControlLabel
            value="0-2"
            control={<Radio />}
            label="0-2"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="3-5"
            control={<Radio />}
            label="3-5"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="6-10"
            control={<Radio />}
            label="6-10"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButtons;
