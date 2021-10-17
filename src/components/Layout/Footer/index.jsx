import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link component={RouterLink} color="inherit" to="/">
        Betting App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      component="footer"
    >
      <Container>
        <Typography variant="body1">My sticky footer</Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
