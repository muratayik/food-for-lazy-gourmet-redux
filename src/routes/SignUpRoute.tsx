import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CopyRight from "components/copyright";
import { validateSignUpInputs } from "utils/validators";

const SignUpRoute = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationErrors, setValidationError] = useState({
    emailError: "",
    passwordError: "",
    firstNameError: "",
    lastNameError: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { firstNameError, lastNameError, emailError, passwordError } =
      validateSignUpInputs({
        firstName,
        lastName,
        email,
        password,
      });

    setValidationError({
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={!!validationErrors.firstNameError}
                  helperText={validationErrors.firstNameError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  error={!!validationErrors.lastNameError}
                  helperText={validationErrors.lastNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!validationErrors.emailError}
                  helperText={validationErrors.emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!validationErrors.passwordError}
                  helperText={validationErrors.passwordError}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <NavLink to="/sign-in">
                  <Typography variant="body2">
                    Already have an account? Sign in
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyRight sx={{ mt: 5 }} />
      </Container>
    </div>
  );
};

export default SignUpRoute;
