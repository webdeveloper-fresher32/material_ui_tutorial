import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcrums = () => {
  return (
    <Box margin={2}>
      <Breadcrumbs
        aria-lable="breadcrums"
        separator="&"
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={3}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Categories
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrums;
