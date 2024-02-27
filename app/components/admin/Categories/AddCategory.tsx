import { Box, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AddCategory() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <Typography variant="h6" display="block" gutterBottom>
            <Box component="span" fontWeight="bold">
              Add Category
            </Box>
          </Typography>
        </Grid2>
        <Grid2 xs={12}>
          <Paper elevation={2}>Form</Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}
