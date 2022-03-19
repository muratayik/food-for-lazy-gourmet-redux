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
import { validateSignInInputs } from "utils/validators";

const SignInRoute = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationErrors, setValidationError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { emailError, passwordError } = validateSignInInputs({
      email,
      password,
    });

    setValidationError({ emailError, passwordError });
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!validationErrors.emailError}
              helperText={validationErrors.emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!validationErrors.passwordError}
              helperText={validationErrors.passwordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <NavLink to="/sign-up">
                  <Typography variant="body2">
                    Don't have an account? Sign Up
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

export default SignInRoute;
