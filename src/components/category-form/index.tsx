import { useState } from "react";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { validateCategoryInputs } from "utils/validators";

const CategoryForm = (props: any) => {
  const { headerText, onFormSubmit } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [validationErrors, setValidationError] = useState({
    nameError: "",
    descriptionError: "",
    imageUrlError: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setValidationError({
      nameError: "",
      descriptionError: "",
      imageUrlError: "",
    });

    const { hasError, nameError, imageUrlError, descriptionError } =
      validateCategoryInputs({ name, imageUrl, description });

    if (!hasError) {
      onFormSubmit({
        name,
        imageUrl,
        description,
      });
    } else {
      setValidationError({
        nameError,
        imageUrlError,
        descriptionError,
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {headerText}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Category Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!validationErrors.nameError}
            helperText={validationErrors.nameError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            multiline
            rows={5}
            inputProps={{ maxLength: 250 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!validationErrors.descriptionError}
            helperText={validationErrors.descriptionError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="imageUrl"
            label="Image Url"
            name="imageUrl"
            autoComplete="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            error={!!validationErrors.imageUrlError}
            helperText={validationErrors.imageUrlError}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {imageUrl && (
              <Box
                component="img"
                sx={{
                  height: 250,
                  width: 300,
                }}
                alt="The house from the offer."
                src={imageUrl}
              />
            )}
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryForm;
