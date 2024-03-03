"use client";
import { CloudUploadOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { File } from "buffer";
import { Controller, useForm } from "react-hook-form";

export default function AddCategory() {
  type CategoryName = {
    categoryName: string;
    image: any;
    isFeatured: Boolean;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryName>({
    defaultValues: {
      categoryName: "",
      isFeatured: false,
    },
  });
  const onSubmit = (data: any) => console.log(data);

  // Validation rule for image files
  const imageValidation = {
    required: "An image file is required",
    validate: (fileList: FileList) => {
      if (fileList.length === 0) {
        return "An image file is required";
      }
      const file = fileList[0];
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
      ];
      console.log(file.type);

      if (!allowedTypes.includes(file.type)) {
        return "Invalid file type. Please select an image (jpeg, png, gif, svg).";
      }
      return true;
    },
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid2 container spacing={2}>
                      <Grid2 xs={12}>
                        <Controller
                          name="categoryName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              required
                              label="Category Name"
                              sx={{ width: "100%" }}
                            />
                          )}
                        />
                      </Grid2>
                      <Grid2 xs={12}>
                        <Controller
                          name="image"
                          control={control}
                          rules={imageValidation}
                          render={({
                            field: { value, onChange, ...field },
                          }) => (
                            <TextField
                              {...field}
                              type="file"
                              value={value?.fileName}
                              InputLabelProps={{ shrink: true }}
                              variant="outlined"
                              fullWidth
                              onChange={(event) => {
                                onChange(event.target?.files[0]);
                              }}
                              margin="normal"
                              error={!!errors.image}
                              helperText={
                                errors.image ? errors.image.message : ""
                              }
                            />
                          )}
                        />
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
