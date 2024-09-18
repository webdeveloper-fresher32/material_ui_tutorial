"use client";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_event, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-context"
          expandIcon={<ExpandMore />}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            quam odit cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_event, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-context"
          expandIcon={<ExpandMore />}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            quam odit cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_event, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-context"
          expandIcon={<ExpandMore />}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            quam odit cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordian;
