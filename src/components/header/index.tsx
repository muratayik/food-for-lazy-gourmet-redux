import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  const onLogOut = () => {};

  return (
    <AppBar position="static">
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo Here
            </Typography>

            <div>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Murat Ayik
                </Typography>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={onLogOut}
                  color="inherit"
                >
                  <Logout />
                </IconButton>
              </Stack>
            </div>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
