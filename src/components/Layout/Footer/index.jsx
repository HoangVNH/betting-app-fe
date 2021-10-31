import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: '12px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#707A8A',
        py: 3
      }}
    >
      <Link component={RouterLink} color="inherit" to="/" underline="none">
        Betting App
      </Link>
      {" © "}
      {new Date().getFullYear()}
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
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
