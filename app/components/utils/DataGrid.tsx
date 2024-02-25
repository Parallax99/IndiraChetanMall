"use client";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridTable({ rows, columns }: any) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        disableColumnMenu
        disableRowSelectionOnClick
      />
    </Box>
  );
}
