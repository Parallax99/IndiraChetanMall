"use client";
import { AddOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DataGridTable from "../../utils/DataGrid";
import { useRouter } from "next/navigation";

export default function CategoriesComponent(params: any) {
  const router = useRouter();
  let rows = params?.data?.rows;
  let columns = params?.data?.columns;

  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <Typography variant="h6" display="block" gutterBottom>
            <Box component="span" fontWeight="bold">
              Product Categories
            </Box>
          </Typography>
        </Grid2>
        <Grid2 xs={6}>Search Filter</Grid2>
        <Grid2 xs={6} textAlign={"right"}>
          <Button
            sx={{ backgroundColor: "rgb(43, 52, 69)" }}
            variant="contained"
            startIcon={<AddOutlined />}
            onClick={() => router.push("/dashboard/categories/create")}
          >
            Add Category
          </Button>
        </Grid2>
        <Grid2 xs>
          <Grid2 container>
            <DataGridTable rows={rows} columns={columns} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
