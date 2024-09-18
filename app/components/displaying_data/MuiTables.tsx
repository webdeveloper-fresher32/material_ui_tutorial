import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import React from "react";

const MuiTables = () => {
  return (
    <TableContainer
      component={Paper}
      // sx={{ maxHeight: "300px" }}
    >
      <Table
        aria-label="simple table"
        //    stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const table = [
  {
    id: 1,
    first_name: "Alma",
    last_name: "Ledwich",
    email: "aledwich0@i2i.jp",
    gender: "Female",
    ip_address: "90.75.225.9",
  },
  {
    id: 2,
    first_name: "Sauncho",
    last_name: "Hamfleet",
    email: "shamfleet1@dion.ne.jp",
    gender: "Male",
    ip_address: "129.1.49.187",
  },
  {
    id: 3,
    first_name: "Caz",
    last_name: "Ingree",
    email: "cingree2@pcworld.com",
    gender: "Male",
    ip_address: "66.186.39.176",
  },
  {
    id: 4,
    first_name: "Zechariah",
    last_name: "Beneyto",
    email: "zbeneyto3@cyberchimps.com",
    gender: "Male",
    ip_address: "196.163.112.53",
  },
  {
    id: 5,
    first_name: "Lane",
    last_name: "Gouldstone",
    email: "lgouldstone4@1688.com",
    gender: "Non-binary",
    ip_address: "255.39.193.230",
  },
  {
    id: 6,
    first_name: "Kerwinn",
    last_name: "Labb",
    email: "klabb5@discovery.com",
    gender: "Male",
    ip_address: "203.82.7.246",
  },
  {
    id: 7,
    first_name: "Shelden",
    last_name: "Metheringham",
    email: "smetheringham6@cnbc.com",
    gender: "Male",
    ip_address: "173.40.237.4",
  },
  {
    id: 8,
    first_name: "Ruthe",
    last_name: "Pauleau",
    email: "rpauleau7@dmoz.org",
    gender: "Female",
    ip_address: "80.58.71.51",
  },
  {
    id: 9,
    first_name: "Kim",
    last_name: "Mix",
    email: "kmix8@microsoft.com",
    gender: "Female",
    ip_address: "59.229.78.169",
  },
  {
    id: 10,
    first_name: "Olivie",
    last_name: "Ivashov",
    email: "oivashov9@tumblr.com",
    gender: "Genderfluid",
    ip_address: "143.187.63.125",
  },
];

export default MuiTables;
