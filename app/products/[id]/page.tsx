"use client";

import MuiAvatar from "@/app/components/displaying_data/MuiAvatar";
import MuiTables from "@/app/components/displaying_data/MuiTables";
import MuiAccordian from "@/app/components/layouts/MuiAccordian";
import MuiCard from "@/app/components/layouts/MuiCard";
import MuiImageList from "@/app/components/layouts/MuiImageList";
import MUILayOut from "@/app/components/layouts/MUILayOut";
import { Button, Typography, Container, Box, Stack } from "@mui/material";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Stack spacing={6}>
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Product {params.id}
        </Typography>
        <Typography variant="h3" gutterBottom>
          Table
        </Typography>
        <MuiTables />
        {/* <MuiAccordian /> */}
        {/* <MuiCard /> */}
        {/* <MuiImageList /> */}
        {/* <MuiAvatar /> */}
      </Container>
    </Stack>
  );
}
