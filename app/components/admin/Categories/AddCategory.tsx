"use client";
import { CloudUploadRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AddCategory() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

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
        <Grid2 xs={12} sx={{ height: "100%" }}>
          <Paper elevation={2} sx={{ height: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Grid2 container spacing={2}>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={4}>
                  <form onSubmit={handleSubmit}>
                    <Grid2 container spacing={2}>
                      <Grid2 xs={12}>
                        <TextField
                          required
                          label="Category Name"
                          id="Category Name"
                          name="categoryName"
                          sx={{ width: "100%" }}
                        />
                      </Grid2>
                      <Grid2 xs={12}>
                        <Box
                          component="section"
                          sx={{
                            p: 2,
                            border: "1px dashed grey",
                            textAlign: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadRounded />}
                            sx={{ textAlign: "center" }}
                          >
                            Upload file
                            <Input
                              sx={{ display: "none" }}
                              name="categoryImage"
                              type="file"
                            />
                          </Button>
                          <div>Upload Category Image</div>
                        </Box>
                      </Grid2>
                      <Grid2 xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Featured Category"
                            value="isFeatured"
                            name="isFeatured"
                          />
                        </FormGroup>
                      </Grid2>
                      <Grid2>
                        <Button
                          variant="outlined"
                          sx={{
                            backgroundColor: "rgb(43,52,69)",
                            color: "white",
                            "&:hover": {
                              color: "black",
                              borderColor: "black",
                            },
                          }}
                          type="submit"
                        >
                          Add Category
                        </Button>
                      </Grid2>
                    </Grid2>
                  </form>
                </Grid2>
                <Grid2 xs={4}></Grid2>
              </Grid2>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}
