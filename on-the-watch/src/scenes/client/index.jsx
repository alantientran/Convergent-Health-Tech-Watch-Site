import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [columnWidth, setColumnWidth] = useState(150); // Initial width, adjust as needed

  // Calculate the maximum width of Name Column based on the longest name
  const longestName = mockDataTeam.reduce(
    (max, { name }) => Math.max(max, name.length),
    0
  );
  const maxColumnWidth = longestName * 10;

  // flex allows the Name column to grow
  const columns = [
    { field: "id", headerName: "Member ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: maxColumnWidth, // Sets the minimum width based on the longest name upon loading
      cellClassName:
        "name-column--cell" /* Allows names to be customizable by color */,
      renderCell: ({ row }) => (
        <Link
          to={{
            pathname: `/person/${row.id}`,
            state: { personDetails: row }, // Pass person's details as state
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          {/* Navigate to /person/:id */}
          <Box
            width={columnWidth}
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[700]}
            borderRadius={"4px"}
          >
            <Typography colors={colors.grey[100]} sx={{ ml: "5px" }}>
              {row.name}
            </Typography>
          </Box>
        </Link>
      ),
    },
    {
      field: "birthday",
      headerName: "Birthday",
      type: "number",
      headerAlign:
        "left" /* setting type as number defaults to aligning right */,
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Clients" subtitle="Access Client Fitly Profiles" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          onColumnResized={(newColumn) => {
            if (newColumn.field === "name") {
              setColumnWidth(newColumn.width);
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Clients;
