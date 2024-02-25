import Navbar from "@/app/components/navbar/navbar";
import { Grid } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container spacing={2}>
      <Navbar>{children}</Navbar>
    </Grid>
  );
}
