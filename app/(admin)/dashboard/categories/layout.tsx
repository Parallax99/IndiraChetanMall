import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Grid2 container spacing={2} p={3}>
        <Grid2 xs={12}>
          <Typography variant="h6" display="block" gutterBottom>
            <Box component="span" fontWeight="bold">
              Product Categories
            </Box>
          </Typography>
        </Grid2>
        <Grid2 xs={12} overflow={"hidden"}>{children}</Grid2>
      </Grid2>
    </>
  );
}
