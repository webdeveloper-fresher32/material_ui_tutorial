import { Typography } from "@mui/material";
import React from "react";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        H3 heading
      </Typography>
      <Typography variant="h4">H4 heading</Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>

      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id maxime
        itaque. Veritatis ullam mollitia veniam? Explicabo adipisci dolor
        reiciendis provident vel dolore, exercitationem doloremque perspiciatis
        minima, harum, error ab iste! Sed.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id maiores
        iure exercitationem ab quasi dicta quibusdam, praesentium facilis
        laudantium vero? Dolores necessitatibus doloremque reiciendis at ipsa
        harum nisi incidunt dolore voluptas! 0
      </Typography>
    </div>
  );
}

export default MuiTypography;
