import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Grid2 container spacing={2}>
        {children}
      </Grid2>
    </>
  );
}
